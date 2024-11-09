import Card from "@/components/Card"
import Link from "next/link"
import React from "react"

const DefaultNotificationRoute = () => {
  return (
    <>
      <Card>
        <p>Default NotificationRoute</p>|
        <Link href="/complex-dashboard/archived">Archived</Link>
      </Card>
    </>
  )
}

export default DefaultNotificationRoute
