import Link from "next/link"
import React from "react"

const ProductList = () => {
  const productId = 1000
  return (
    <>
      <Link href="/">Home</Link>
      <Link href="/products/1">Product 1</Link>
      <Link href="/products/2">Product 2</Link>
      <Link href="/products/3" replace>Product 3</Link>
      <Link href={`/products/${productId}`}>Product {productId}</Link>
    </>
  )
}

export default ProductList
