"use client"
import React, { useState } from "react"

const TemplateRootLayout = ({ children }: { children: React.ReactNode }) => {
  const [input, setInput] = useState<string>()
  return (
    <div>
        <label htmlFor="templateInput">Template</label>
      <input
        type="text"
        id="templateInput"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      {children}
    </div>
  )
}

export default TemplateRootLayout
