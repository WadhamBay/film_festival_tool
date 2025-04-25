
import { useState } from 'react'
import { useRouter } from 'next/router'

export default function Home() {
  const [title, setTitle] = useState('')
  const router = useRouter()

  const handleSubmit = (e) => {
    e.preventDefault()
    router.push({
      pathname: '/results',
      query: { title }
    })
  }

  return (
    <div className="min-h-screen bg-midnight-blue text-white flex flex-col items-center p-4">
      <h1 className="text-4xl font-bold mt-8">Plan Your Film Festival Strategy</h1>
      <form onSubmit={handleSubmit} className="bg-white text-black rounded-2xl shadow-lg p-6 mt-6 w-full max-w-xl">
        <div className="mb-4">
          <label className="block mb-1">Film Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full border rounded px-3 py-2"
            placeholder="Enter your film title"
          />
        </div>
        <button type="submit" className="bg-aqua-blue text-white px-6 py-3 rounded-xl font-semibold">
          Find My Festivals
        </button>
      </form>
    </div>
)
}
