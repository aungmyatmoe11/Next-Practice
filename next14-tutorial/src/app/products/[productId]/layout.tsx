"use client"
import React from "react"

const ProductDetailsLayout = ({ children }: { children: React.ReactNode }) => {
  const getRandomInt = (count: number): number => {
    return Math.floor(Math.random() * count)
  }

  const random = getRandomInt(2)

  if (random === 1) {
    throw new Error("Error loading PRODUCTS LAYOUT")
  }

  return (
    <>
      <h2>Features products</h2>
      {children}
      {/* Carousel here or something */}
    </>
  )
}

export default ProductDetailsLayout
