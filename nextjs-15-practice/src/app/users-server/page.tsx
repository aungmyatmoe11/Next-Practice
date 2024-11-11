type User = {
  id: number
  name: string
  username: string
  email: string
  phone: string
}

export default async function UsersServer() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await response.json();

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
