import Card from "@/components/Card"
import Link from "next/link"
import React from "react"

const ArchivedNotificationRoute = () => {
  return (
    <>
      <Card>
        <p>Archived NotificationRoute</p>|
        <Link href="/complex-dashboard">Default</Link>
      </Card>
    </>
  )
}

export default ArchivedNotificationRoute
