import { useState } from "react";

export default function SearchDoctor() {
  const [condition, setCondition] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setResults([]);

    try {
      const res = await fetch("http://localhost:5000/api/diagnose", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ condition }),
      });

      const data = await res.json();

      if (data.matches) {
        setResults(data.matches);
      } else if (data.error) {
        setResults([{ error: data.error }]);
      }

    } catch (err) {
      console.error(err);
      setResults([{ error: "Failed to connect to backend" }]);
    }

    setLoading(false);
  };

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Find a Doctor by Your Condition</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <textarea
          className="w-full border rounded p-2"
          rows={4}
          placeholder="Describe your symptoms..."
          value={condition}
          onChange={(e) => setCondition(e.target.value)}
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          {loading ? "Analyzing..." : "Find Doctor"}
        </button>
      </form>

      {/* Results */}
      {results.length > 0 && (
        <div className="mt-6 space-y-4">
          {results.map((result, index) => (
            <div key={index} className="p-4 border rounded bg-gray-50">
              {result.error ? (
                <p className="text-red-500">{result.error}</p>
              ) : (
                <>
                  <p><strong>Condition:</strong> {result.condition}</p>
                  <p><strong>Doctor:</strong> {result.doctor}</p>
                  <p><strong>Specialty:</strong> {result.specialty || "N/A"}</p>
                  <p><strong>Hospital:</strong> {result.hospital}</p>
                  <p><strong>Recommendation:</strong> {result.recommendation}</p>
                </>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
