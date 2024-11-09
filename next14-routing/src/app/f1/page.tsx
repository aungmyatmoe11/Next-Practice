import Link from "next/link"
import React from "react"

function f1() {
  return (
    <div>
      <h1>F1 page</h1>
      <div>
        <Link href="/f1/f2">F2 Page</Link>
        <Link href="/f1/f4">F4 Page</Link>
      </div>
    </div>
  )
}

export default f1
