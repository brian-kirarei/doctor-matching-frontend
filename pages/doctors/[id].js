import { useRouter } from 'next/router'
import useSWR from 'swr'
const fetcher = (url) => fetch(url).then(r=>r.json())
export default function DoctorProfile(){
  const router = useRouter()
  const { id } = router.query
  const { data } = useSWR(id ? `/api/proxy/doctors/${id}` : null, fetcher)
  if (!data) return <div className="p-6">Loading...</div>
  const d = data
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded shadow">
      <h1 className="text-2xl font-bold">Dr {d.first_name} {d.last_name} {d.verified ? '✅' : ''}</h1>
      <p className="text-sm text-gray-600">{(d.specialties || []).join(', ')}</p>
      <div className="mt-4">{d.bio || 'No bio provided.'}</div>
      <div className="mt-4">Primary hospital: {d.hospital_name} ({d.hospital_city})</div>
      <div className="mt-6">
        <button className="px-4 py-2 bg-green-600 text-white rounded">Request Appointment</button>
      </div>
    </div>
  )
}
