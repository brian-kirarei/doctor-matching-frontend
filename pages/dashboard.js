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
      const data = await getPatientHistory();
      setDiagnoses(data);
    } catch (err) {
      console.error(err);
      setError("Failed to fetch diagnosis history");
    }
  };

  useEffect(() => {
    fetchHistory();
  }, []);

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const newDiagnosis = await diagnosePatient({
        patient_name: patientName,
        symptoms,
      });

      setDiagnoses((prev) => [newDiagnosis, ...prev]);
      setPatientName("");
      setSymptoms("");
    } catch (err) {
      console.error(err);
      setError("Diagnosis failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ maxWidth: "800px", margin: "auto", padding: "2rem" }}>
      <h1>Patient Diagnosis Dashboard</h1>

      {/* Form */}
      <form onSubmit={handleSubmit} style={{ marginBottom: "2rem" }}>
        <div>
          <label>Patient Name:</label>
          <input
            type="text"
            value={patientName}
            onChange={(e) => setPatientName(e.target.value)}
            required
            style={{ width: "100%", padding: "0.5rem", margin: "0.5rem 0" }}
          />
        </div>
        <div>
          <label>Symptoms:</label>
          <textarea
            value={symptoms}
            onChange={(e) => setSymptoms(e.target.value)}
            required
            rows={4}
            style={{ width: "100%", padding: "0.5rem", margin: "0.5rem 0" }}
          />
        </div>
        <button type="submit" disabled={loading}>
          {loading ? "Diagnosing..." : "Diagnose"}
        </button>
      </form>

      {error && <p style={{ color: "red" }}>{error}</p>}

      {/* Diagnosis History */}
      <h2>Diagnosis History</h2>
      {diagnoses.length === 0 ? (
        <p>No diagnoses yet.</p>
      ) : (
        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            marginTop: "1rem",
          }}
        >
          <thead>
            <tr>
              <th style={{ border: "1px solid #ddd", padding: "0.5rem" }}>
                Patient
              </th>
              <th style={{ border: "1px solid #ddd", padding: "0.5rem" }}>
                Symptoms
              </th>
              <th style={{ border: "1px solid #ddd", padding: "0.5rem" }}>
                Diagnosis
              </th>
              <th style={{ border: "1px solid #ddd", padding: "0.5rem" }}>
                Confidence
              </th>
              <th style={{ border: "1px solid #ddd", padding: "0.5rem" }}>
                Severity
              </th>
              <th style={{ border: "1px solid #ddd", padding: "0.5rem" }}>
                Doctor
              </th>
              <th style={{ border: "1px solid #ddd", padding: "0.5rem" }}>
                Hospital
              </th>
              <th style={{ border: "1px solid #ddd", padding: "0.5rem" }}>
                Date
              </th>
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
                  {d.doctor_name}
                </td>
                <td style={{ border: "1px solid #ddd", padding: "0.5rem" }}>
                  {d.hospital}
                </td>
                <td style={{ border: "1px solid #ddd", padding: "0.5rem" }}>
                  {new Date(d.created_at).toLocaleString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}