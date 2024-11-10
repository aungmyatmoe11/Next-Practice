import React from "react"
import { serverSideFunction } from "../utils/server-utils"

const ServerRoutePage = () => {
  console.log("SEVER ROUTE RENDER")
  const result = serverSideFunction()
  return (
    <div>
      <h1>Server Route Page</h1>
      <h1>{result}</h1>
    </div>
  )
}

export default ServerRoutePage
