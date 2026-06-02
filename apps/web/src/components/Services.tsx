import { useEffect, useState } from 'react'

export function Services() {
  const [services, setServices] = useState<any[]>([])

  useEffect(() => {
    fetch(import.meta.env.VITE_API_URL + '/api/services')
      .then(res => res.json())
      .then(data => setServices(data))
      .catch(console.error)
  }, [])

  return (
    <div className="p-4 border rounded shadow-sm bg-white">
      <h2 className="text-xl font-bold mb-4">Каталог Услуг (W11)</h2>
      {services.length === 0 ? (
        <p className="text-gray-500">Нет добавленных услуг</p>
      ) : (
        <ul className="space-y-2">
          {services.map(s => (
            <li key={s.id} className="p-2 border rounded bg-gray-50 flex justify-between">
              <span className="font-semibold">{s.name}</span>
              <span className="text-green-700 font-medium">{s.basePrice} KGS</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
