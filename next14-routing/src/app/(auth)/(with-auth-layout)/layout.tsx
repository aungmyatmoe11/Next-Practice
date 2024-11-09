import { Metadata } from "next"
import React from "react"

export const metadata: Metadata = {
  // title: "Auth Layout",
  title : {
    absolute : "Absolute Auth Layout"
  }
}

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <h2>Auth Layout</h2>
      {children}
      {/* Add any additional layout elements here */}
    </>
  )
}

export default AuthLayout
