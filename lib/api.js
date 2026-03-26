// lib/api.js
const API_BASE = process.env.NEXT_PUBLIC_API_URL;

export const diagnosePatient = async (data) => {
  const response = await fetch(`${API_BASE}/diagnose`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error("Failed to diagnose patient");
  }
  return response.json();
};

export const getPatientHistory = async () => {
  const response = await fetch(`${API_BASE}/diagnoses`);
  if (!response.ok) {
    throw new Error("Failed to fetch diagnosis history");
  }
  return response.json();
};