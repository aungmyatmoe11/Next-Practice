import Link from "next/link"
import React from "react"

function f4() {
  return (
    <div>
      <h1>F4 Page</h1>
      <Link href="/f1/f3">F3 page</Link>
      <Link href="/about">ABOUT</Link>
    </div>
  )
}

export default f4
