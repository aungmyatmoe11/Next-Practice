"use client"
import { notFound } from "next/navigation"
import React from "react"

const getRandomInt = (count: number): number => {
  return Math.floor(Math.random() * count)
}

const ProductReviewDetail = ({
  params,
}: {
  params: { productId: string; reviewId: string }
}) => {
  // const random = getRandomInt(2)

  // if (random === 1) {
  //   throw new Error("Error loading review")
  // }

  if (parseInt(params.reviewId) > 1000) {
    notFound() // ! folder yk not found folder ko ayim shr mr (ma twe yim 404 page ko twr mr)
  }

  return (
    <div>
      Product : {params.productId} : Review : {params.reviewId}
    </div>
  )
}

export default ProductReviewDetail
