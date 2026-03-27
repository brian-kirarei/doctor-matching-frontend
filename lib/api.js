// lib/api.js
const API_BASE = process.env.NEXT_PUBLIC_API_URL;

export const diagnosePatient = async (symptoms) => {
  const response = await fetch(`${API_BASE}/diagnosis`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ symptoms }),
  });
  return response.json();
};

export const fetchHistory = async () => {
  const response = await fetch(`${API_BASE}/diagnoses`);
  return response.json();
};

export const bookAppointment = async (data) => {
  const response = await fetch(`${API_BASE}/appointments/book`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return response.json();
};