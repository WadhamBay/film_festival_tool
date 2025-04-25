
import { useRouter } from 'next/router'
import useSWR from 'swr'

const fetcher = (url) => fetch(url).then((res) => res.json())

export default function Results() {
  const { query } = useRouter()
  const { data, error } = useSWR('/api/festivals', fetcher)

  if (error) return <div>Failed to load</div>
  if (!data) return <div>Loading...</div>

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold">Results for &ldquo;{query.title}&rdquo;</h1>
      <table className="min-w-full mt-4 border">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-2">Festival</th>
            <th className="p-2">Tier</th>
            <th className="p-2">Fees</th>
            <th className="p-2">Deadlines</th>
          </tr>
        </thead>
        <tbody>
          {data.map((fest) => (
            <tr key={fest.festival_id} className="border-t">
              <td className="p-2"><a href={fest.website} className="text-blue-600">{fest.name}</a></td>
              <td className="p-2">{fest.profile_tier}</td>
              <td className="p-2">{`${fest.fees.early}/${fest.fees.regular}/${fest.fees.late}`}</td>
              <td className="p-2">{`${fest.deadlines.early}/${fest.deadlines.regular}/${fest.deadlines.late}`}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
