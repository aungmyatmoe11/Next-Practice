import { notFound } from "next/navigation";
import React from "react"

const ProductReviewDetail = ({
  params,
}: {
  params: { productId: string; reviewId: string }
}) => {
    if(parseInt(params.reviewId) > 1000){
        notFound() // ! folder yk not found folder ko ayim shr mr (ma twe yim 404 page ko twr mr)
    }

  return <div>Product : {params.productId} : Review : {params.reviewId}</div>
}

export default ProductReviewDetail
