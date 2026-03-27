// lib/api.js
const API_BASE = process.env.NEXT_PUBLIC_API_URL;

export const diagnosePatient = async (data) => {
  const response = await fetch(`${API_BASE}/diagnosis`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  if (!response.ok) throw new Error("Diagnosis failed");
  return response.json();
};

export const fetchHistory = async () => {
  const response = await fetch(`${API_BASE}/diagnoses`);

  if (!response.ok) throw new Error("Failed to fetch history");
  return response.json();
};

export const bookAppointment = async (data) => {
  const response = await fetch(`${API_BASE}/appointments/book`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  if (!response.ok) throw new Error("Booking failed");
  return response.json();
};