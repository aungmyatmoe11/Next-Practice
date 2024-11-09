"use client"
import { useRouter } from "next/navigation"
import React from "react"

const OrderProduct = () => {
  const router = useRouter()
  const handleClick = () => {
    alert("Complete order")
    router.push("/")
  }

  return (
    <>
      <h1>Order Product</h1>
      <button onClick={handleClick}>Place Order</button>
    </>
  )
}

export default OrderProduct
