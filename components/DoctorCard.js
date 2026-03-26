export default function DoctorCard({ doctor }) {
  return (
    <div className="border rounded-lg p-6 shadow bg-white">
      <h3 className="text-xl font-bold mb-1">{doctor.doctor}</h3>
      <p className="text-blue-600">{doctor.specialty}</p>
      <p className="mt-2"><b>Hospital:</b> {doctor.hospital}</p>

      <button className="mt-4 bg-green-600 text-white px-4 py-2 rounded w-full">
        Book Appointment
      </button>
    </div>
  );
}
