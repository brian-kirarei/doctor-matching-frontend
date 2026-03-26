const API_BASE = "https://doctor-matching-backend.onrender.com";

export const diagnosePatient = async (symptoms) => {
  const response = await fetch(`${API_BASE}/diagnosis`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ symptoms })
  });

  return response.json();
};

export const bookAppointment = async (data) => {
  const response = await fetch(`${API_BASE}/appointments/book`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  });

  return response.json();
};