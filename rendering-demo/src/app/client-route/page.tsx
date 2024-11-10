"use client"
import React from "react"
import { serverSideFunction } from "../utils/server-utils"

const ClientRoutePage = () => {
  console.log("CLIENT ROUTE RENDER")
  const result = serverSideFunction()
  return (
    <div>
      <h1>Client Route Page</h1>
      <h1>{result}</h1>
    </div>
  )
}

export default ClientRoutePage
