"use client"
import { useEffect, useState } from "react"

type User = {
  id: number
  name: string
  username: string
  email: string
  phone: string
}

export default function UsersClient() {
  const [users, setUsers] = useState<User[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")

  useEffect(() => {
    async function fetchUsers() {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        )
        if (!response.ok) throw new Error("Network response was not ok")
        const usersData = await response.json()
        setUsers(usersData)
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message)
        } else {
          setError("An unknown error occurred")
        }
      } finally {
        setLoading(false)
      }
    }

    fetchUsers()
  }, [])

  if (loading) return <div>Loading...</div>
  if (error) return <div>Error: {error}</div>

  return (
    <ul className="space-y-4 p-4">
      {users.map((user : User) => (
        <li
          key={user.id}
          className="p-4 bg-white shadow-md rounded-lg text-gray-700"
        >
          <h2 className="text-lg font-semibold">{user.name}</h2>
          <p className="text-sm">{user.username}</p>
          <div className="flex flex-col space-y-1 items-end">
            <div className="text-md">{user.email}</div>
            <div className="text-sm">{user.phone}</div>
          </div>
        </li>
      ))}
    </ul>
  )
}
