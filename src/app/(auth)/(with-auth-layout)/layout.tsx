import React from "react"

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
