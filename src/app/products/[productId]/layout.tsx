import React from "react"

const ProductDetailsLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <h2>Features products</h2>
      {children}
      {/* Carousel here or something */}
    </>
  )
}

export default ProductDetailsLayout
