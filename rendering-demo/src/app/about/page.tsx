import React from "react"
import { cookies } from "next/headers"

const AboutPage = () => {
  const cookieStore = cookies()
  const theme = cookieStore.get("theme")
  console.log("Theme: " + theme)
  console.log("AboutPage console")
  return <div>About Page {new Date().toLocaleTimeString()}</div>
}

export default AboutPage
