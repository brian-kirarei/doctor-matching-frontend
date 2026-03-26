import { useState } from 'react'
export default function SearchBar({ onSearch }){
  const [q, setQ] = useState('')
  const [city, setCity] = useState('')
  return (
    <form onSubmit={e => { e.preventDefault(); onSearch({ q, city }) }} className="flex gap-2">
      <input className="p-2 rounded border" placeholder="Condition or doctor" value={q} onChange={e=>setQ(e.target.value)} />
      <input className="p-2 rounded border" placeholder="City" value={city} onChange={e=>setCity(e.target.value)} />
      <button className="px-4 py-2 bg-blue-600 text-white rounded">Search</button>
    </form>
  )
}
