// pages/dashboard.js
import { useState, useEffect } from "react";
import { diagnosePatient, getPatientHistory } from "../lib/api";

export default function Dashboard() {
  const [patientName, setPatientName] = useState("");
  const [symptoms, setSymptoms] = useState("");
  const [diagnoses, setDiagnoses] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Fetch diagnosis history from backend
  const fetchHistory = async () => {
    try {
      setError("");
      const data = await getPatientHistory();
      setDiagnoses(data || []);
    } catch (err) {
      console.error(err);
      setError("Failed to fetch diagnosis history. Please try again later.");
    }
  };

  useEffect(() => {
    fetchHistory();
  }, []);

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!patientName.trim() || !symptoms.trim()) return;

    setLoading(true);
    setError("");

    try {
      const newDiagnosis = await diagnosePatient({
        patient_name: patientName,
        symptoms,
      });

      if (newDiagnosis) {
        setDiagnoses((prev) => [newDiagnosis, ...prev]);
        setPatientName("");
        setSymptoms("");
      }
    } catch (err) {
      console.error(err);
      setError("Diagnosis failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ maxWidth: "900px", margin: "auto", padding: "2rem" }}>
      <h1 style={{ marginBottom: "1.5rem" }}>Patient Diagnosis Dashboard</h1>

      {/* Form */}
      <form onSubmit={handleSubmit} style={{ marginBottom: "2rem" }}>
        <div style={{ marginBottom: "1rem" }}>
          <label>Patient Name:</label>
          <input
            type="text"
            value={patientName}
            onChange={(e) => setPatientName(e.target.value)}
            required
            style={{ width: "100%", padding: "0.5rem", marginTop: "0.25rem" }}
          />
        </div>

        <div style={{ marginBottom: "1rem" }}>
          <label>Symptoms:</label>
          <textarea
            value={symptoms}
            onChange={(e) => setSymptoms(e.target.value)}
            required
            rows={4}
            style={{ width: "100%", padding: "0.5rem", marginTop: "0.25rem" }}
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          style={{
            padding: "0.5rem 1rem",
            backgroundColor: "#4f46e5",
            color: "white",
            border: "none",
            cursor: loading ? "not-allowed" : "pointer",
          }}
        >
          {loading ? "Diagnosing..." : "Diagnose"}
        </button>
      </form>

      {/* Error */}
      {error && <p style={{ color: "red", marginBottom: "1rem" }}>{error}</p>}

      {/* Diagnosis History */}
      <h2>Diagnosis History</h2>
      {diagnoses.length === 0 ? (
        <p>No diagnoses yet.</p>
      ) : (
        <div style={{ overflowX: "auto" }}>
          <table
            style={{
              width: "100%",
              borderCollapse: "collapse",
              marginTop: "1rem",
            }}
          >
            <thead>
              <tr>
                {[
                  "Patient",
                  "Symptoms",
                  "Diagnosis",
                  "Confidence",
                  "Severity",
                  "Doctor",
                  "Hospital",
                  "Date",
                ].map((heading) => (
                  <th
                    key={heading}
                    style={{
                      border: "1px solid #ddd",
                      padding: "0.5rem",
                      backgroundColor: "#f3f4f6",
                      textAlign: "left",
                    }}
                  >
                    {heading}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {diagnoses.map((d) => (
                <tr key={d.id}>
                  <td style={{ border: "1px solid #ddd", padding: "0.5rem" }}>
                    {d.patient_name}
                  </td>
                  <td style={{ border: "1px solid #ddd", padding: "0.5rem" }}>
                    {d.symptoms}
                  </td>
                  <td style={{ border: "1px solid #ddd", padding: "0.5rem" }}>
                    {d.diagnosis}
                  </td>
                  <td style={{ border: "1px solid #ddd", padding: "0.5rem" }}>
                    {(d.confidence * 100).toFixed(1)}%
                  </td>
                  <td style={{ border: "1px solid #ddd", padding: "0.5rem" }}>
                    {d.severity}
                  </td>
                  <td style={{ border: "1px solid #ddd", padding: "0.5rem" }}>
                    {d.doctor_name || "-"}
                  </td>
                  <td style={{ border: "1px solid #ddd", padding: "0.5rem" }}>
                    {d.hospital || "-"}
                  </td>
                  <td style={{ border: "1px solid #ddd", padding: "0.5rem" }}>
                    {new Date(d.created_at).toLocaleString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}