import { useState, useEffect } from "react";
import { diagnosePatient, fetchHistory } from "../lib/api";

export default function Dashboard() {
  const [patientName, setPatientName] = useState("");
  const [symptoms, setSymptoms] = useState("");
  const [diagnoses, setDiagnoses] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const getHistory = async () => {
      try {
        const data = await fetchHistory();
        setDiagnoses(data);
      } catch (err) {
        setError("Failed to fetch diagnosis history");
      }
    };
    getHistory();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const data = await diagnosePatient({ patient_name: patientName, symptoms });
      setDiagnoses((prev) => [data, ...prev]);
      setPatientName("");
      setSymptoms("");
    } catch {
      setError("Diagnosis failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ maxWidth: "800px", margin: "auto", padding: "2rem" }}>
      <h1>Patient Diagnosis Dashboard</h1>
      <form onSubmit={handleSubmit} style={{ marginBottom: "2rem" }}>
        <input
          placeholder="Patient Name"
          value={patientName}
          onChange={(e) => setPatientName(e.target.value)}
          required
        />
        <textarea
          placeholder="Symptoms"
          value={symptoms}
          onChange={(e) => setSymptoms(e.target.value)}
          required
        />
        <button type="submit" disabled={loading}>
          {loading ? "Diagnosing..." : "Diagnose"}
        </button>
      </form>

      {error && <p style={{ color: "red" }}>{error}</p>}

      <h2>Diagnosis History</h2>
      <table>
        <thead>
          <tr>
            <th>Patient</th>
            <th>Symptoms</th>
            <th>Diagnosis</th>
            <th>Confidence</th>
            <th>Severity</th>
            <th>Doctor</th>
            <th>Hospital</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {diagnoses.map((d) => (
            <tr key={d.id}>
              <td>{d.patient_name}</td>
              <td>{d.symptoms}</td>
              <td>{d.diagnosis}</td>
              <td>{(d.confidence * 100).toFixed(1)}%</td>
              <td>{d.severity}</td>
              <td>{d.doctor_name}</td>
              <td>{d.hospital}</td>
              <td>{new Date(d.created_at).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}