"use client"
import React, { useState } from "react"

const DashboardPage = () => {
  const [name, setName] = useState("")
  console.log('Dashboard Page Console')
  return (
    <div>
      <h1>Dashboard</h1>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <p>Data Input : {name}</p>
    </div>
  )
}

export default DashboardPage
