import React from "react"

type Props = {
  params: {
    productId: string
  }
}

// Example for generating metadata in Next.js 13+ using App Directory
export const generateMetadata = async ({ params }: Props) => {
  const title = await new Promise((resolve) => {
    setTimeout(() => {
      resolve(`IPhone ${params.productId}`)
    }, 100)
  })

  return {
    title: `Product Detail - ${title}`,
  }
}


const ProductDetail = ({ params }: Props) => {
  return <div>Product {params.productId}</div>
}

export default ProductDetail
