import { useEffect, useState } from "react";
import axios from "axios";

export default function History() {
  const [diagnoses, setDiagnoses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchDiagnoses();
  }, []);

  const fetchDiagnoses = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/diagnoses");
      setDiagnoses(res.data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <p style={{ padding: "2rem" }}>Loading records...</p>;

  return (
    <div style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h1>Diagnosis History</h1>

      <table border="1" cellPadding="10" style={{ width: "100%" }}>
        <thead>
          <tr>
            <th>Patient</th>
            <th>Symptoms</th>
            <th>Diagnosis</th>
            <th>Severity</th>
            <th>Confidence</th>
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
              <td>{d.severity}</td>
              <td>{(d.confidence * 100).toFixed(0)}%</td>
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
