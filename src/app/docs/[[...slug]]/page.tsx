import React from "react"

const Docs = ({
  params,
}: {
  params: {
    slug: string[]
  }
}) => {
  if (params.slug?.length === 2) {
    return (
      <div>
        Documentation : {params.slug[0]} : {params.slug[1]}
      </div>
    )
  } else if (params.slug?.length === 1) {
    return <div>Documentation : {params.slug[0]}</div>
  }

  return <h1>Doc home page</h1>
}

export default Docs
