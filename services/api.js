// lib/api.js
const API_BASE = process.env.NEXT_PUBLIC_API_URL; // <- uses the .env.local value

export const diagnosePatient = async (data) => {
  const response = await fetch(`${API_BASE}/diagnose`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  return response.json();
};

export const getPatientHistory = async (patientId = null) => {
  const url = patientId
    ? `${API_BASE}/diagnoses/${patientId}`
    : `${API_BASE}/diagnoses`;

  const response = await fetch(url);
  return response.json();
};

export const bookAppointment = async (data) => {
  const response = await fetch(`${API_BASE}/appointments/book`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  return response.json();
};