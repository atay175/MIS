
import { Branches } from './components/Branches'
import { Services } from './components/Services'

function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-8 text-gray-900 font-sans">
      <div className="max-w-4xl mx-auto">
        <header className="mb-8 border-b pb-4">
          <h1 className="text-3xl font-extrabold text-blue-900">KDK MIS</h1>
          <p className="text-gray-600 mt-2">Медицинская Информационная Система</p>
        </header>

        <main>
          <Branches />
          <Services />
        </main>
      </div>
    </div>
  )
}

export default App
