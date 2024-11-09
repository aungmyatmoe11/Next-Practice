import Card from "@/components/Card"
import Link from "next/link"
import React from "react"

const NotificationRoute = () => {
  return (
    <>
      <Card>
        <p>NotificationRoute</p>|
        <Link href="/complex-dashboard/archived">Archived</Link>
      </Card>
    </>
  )
}

export default NotificationRoute
