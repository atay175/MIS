import { useEffect, useState } from 'react'

export function Branches() {
  const [branches, setBranches] = useState<any[]>([])

  useEffect(() => {
    fetch(import.meta.env.VITE_API_URL + '/api/branches')
      .then(res => res.json())
      .then(data => setBranches(data))
      .catch(console.error)
  }, [])

  return (
    <div className="p-4 border rounded shadow-sm bg-white mb-6">
      <h2 className="text-xl font-bold mb-4">Филиалы (W12)</h2>
      {branches.length === 0 ? (
        <p className="text-gray-500">Нет добавленных филиалов</p>
      ) : (
        <ul className="space-y-2">
          {branches.map(b => (
            <li key={b.id} className="p-2 border rounded bg-gray-50 flex flex-col">
              <span className="font-semibold">{b.name}</span>
              <span className="text-sm text-gray-600">{b.address}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
