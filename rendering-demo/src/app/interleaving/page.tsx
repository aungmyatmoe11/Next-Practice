import React from "react"
import { ClientComponentOne } from "../components/client-component-one"
import { ServerComponentOne } from "../components/server-component-one"

const InterleavingPage = () => {
  return (
    <>
      <h1>InterLeaving Page</h1>
      <ClientComponentOne>
        <ServerComponentOne />
      </ClientComponentOne>
    </>
  )
}

export default InterleavingPage
