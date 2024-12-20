"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import React, { useState } from "react"
import "./styles.css"

const navLinks = [
  { name: "Register", href: "/register" },
  { name: "Login", href: "/login" },
  { name: "Forget Password", href: "/forget-password" },
]

const AuthRootLayout = ({ children }: { children: React.ReactNode }) => {
  const [input,setInput] = useState("")

  const pathname = usePathname()
  return (
    <>
    <div>
      <label htmlFor="authLayoutInpu">Layout</label>
      <input type="text" id="authLayoutInpu" value={input} onChange={e => setInput(e.target.value)} />
    </div>
      {navLinks.map((link) => {
        const isActive = pathname.startsWith(link.href)
        return (
          <Link
            href={link?.href}
            key={link.name}
            className={isActive ? "font-bold mr-4" : "text-blue-500 mr-4"}
          >
            {link?.name}
          </Link>
        )
      })}
      {children}
    </>
  )
}

export default AuthRootLayout
