import { useState, useEffect } from "react";

// Optional: install chart.js for probability charts
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Tooltip, Legend } from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

export default function DiagnosisDashboard() {
  const [mounted, setMounted] = useState(false);
  const [symptoms, setSymptoms] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  // Mounting to prevent hydration errors
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  // Predefined symptom suggestions
  const suggestions = [
    "Fever",
    "Headache",
    "Cough",
    "Chest Pain",
    "Body Weakness",
    "Vomiting",
    "Stomach Pain",
  ];

  const addSymptom = (symptom) => {
    setSymptoms((prev) => prev + (prev ? ", " : "") + symptom);
  };

  const handleDiagnose = async () => {
    if (!symptoms) {
      alert("Please enter symptoms");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("http://localhost:5000/api/diagnosis", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ symptoms }),
      });
      const data = await res.json();
      setResult(data);
    } catch (error) {
      console.error(error);
      alert("Server connection failed");
    }

    setLoading(false);
  };

  return (
    <div style={styles.page}>
      <div style={styles.container}>
        <h1 style={styles.header}>AI Medical Dashboard</h1>
        <p style={styles.subheader}>
          Describe your symptoms and get AI-powered diagnosis + doctor recommendations.
        </p>

        {/* Symptom Input */}
        <textarea
          style={styles.input}
          placeholder="Type or select symptoms..."
          value={symptoms}
          onChange={(e) => setSymptoms(e.target.value)}
        />

        {/* Symptom suggestions */}
        <div style={styles.suggestions}>
          {suggestions.map((symptom) => (
            <button
              key={symptom}
              style={styles.chip}
              onClick={() => addSymptom(symptom)}
            >
              {symptom}
            </button>
          ))}
        </div>

        {/* Analyze Button */}
        <button style={styles.button} onClick={handleDiagnose}>
          {loading ? "Analyzing..." : "Run Diagnosis"}
        </button>

        {/* Results Section */}
        {result && (
          <div style={styles.results}>
            <h2>Diagnosis Result</h2>

            {/* Condition Card */}
            <div style={styles.card}>
              <h3>Most Likely Condition</h3>
              <p>{result.condition}</p>
              <p>Confidence: {Math.round(result.confidence * 100)}%</p>
            </div>

            {/* Disease Probability Chart */}
            {result.probabilities && (
              <div style={styles.chart}>
                <Bar
                  data={{
                    labels: Object.keys(result.probabilities),
                    datasets: [
                      {
                        label: "Probability (%)",
                        data: Object.values(result.probabilities).map((v) =>
                          Math.round(v * 100)
                        ),
                        backgroundColor: "#1CB5E0",
                      },
                    ],
                  }}
                  options={{
                    responsive: true,
                    plugins: { legend: { display: false } },
                  }}
                />
              </div>
            )}

            {/* Doctors List */}
            <h2 style={{ marginTop: "25px" }}>Recommended Doctors</h2>
            {result.doctors?.map((doc) => (
              <div key={doc.id} style={styles.doctorCard}>
                <h3>{doc.name}</h3>
                <p>{doc.specialty} | {doc.hospital_name}</p>
                <p>Experience: {doc.experience} yrs | Rating: {doc.rating}</p>
                <p>Match Score: {Math.round(doc.matchScore || 0)}%</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

// ====== Styles ======
const styles = {
  page: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
    padding: "50px",
    fontFamily: "Arial, sans-serif",
    background: "linear-gradient(120deg,#1CB5E0,#000851)",
  },
  container: {
    width: "700px",
    background: "white",
    padding: "40px",
    borderRadius: "20px",
    boxShadow: "0px 20px 50px rgba(0,0,0,0.3)",
  },
  header: { textAlign: "center", color: "#1CB5E0", fontSize: "36px" },
  subheader: { textAlign: "center", marginBottom: "30px", color: "#444" },
  input: {
    width: "100%",
    height: "100px",
    borderRadius: "12px",
    border: "2px solid #1CB5E0",
    padding: "15px",
    fontSize: "16px",
    background: "#fff",
    color: "#000",
    outline: "none",
  },
  suggestions: { marginTop: "15px", display: "flex", flexWrap: "wrap", gap: "10px" },
  chip: {
    border: "none",
    padding: "8px 15px",
    borderRadius: "25px",
    background: "#e8f6ff",
    cursor: "pointer",
    fontSize: "14px",
    transition: "0.2s",
  },
  button: {
    marginTop: "20px",
    width: "100%",
    padding: "15px",
    borderRadius: "12px",
    border: "none",
    background: "linear-gradient(90deg,#00c6ff,#0072ff)",
    color: "white",
    fontSize: "18px",
    fontWeight: "bold",
    cursor: "pointer",
  },
  results: { marginTop: "30px" },
  card: {
    background: "#f4f9ff",
    padding: "20px",
    borderRadius: "12px",
    marginTop: "15px",
    borderLeft: "6px solid #1CB5E0",
  },
  chart: { marginTop: "20px" },
  doctorCard: {
    background: "#e0f0ff",
    padding: "20px",
    borderRadius: "12px",
    marginTop: "15px",
    transition: "0.3s",
    cursor: "pointer",
  },
};