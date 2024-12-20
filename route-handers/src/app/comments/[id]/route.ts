import { redirect } from "next/navigation"
import { comments } from "../data"

export async function GET(
  _request: Request,
  { params }: { params: { id: string } }
) {
  const comment = comments.find((comment) => comment.id === parseInt(params.id))

  if(!comment) redirect("/comments")

  return Response.json(comment)
}

export async function PATCH(
  request: Request,
  { params }: { params: { id: string } }
) {
  const { text } = await request.json()

  const index = comments.findIndex(
    (comment) => comment.id === parseInt(params.id)
  )
  comments[index].text = text

  return Response.json(comments[index])
}

export async function DELETE(
  _request: Request,
  { params }: { params: { id: string } }
) {
  const index = comments.findIndex(
    (comment) => comment.id === parseInt(params.id)
  )

  const deletedComment = comments[index]
  comments.splice(index, 1)

  return Response.json(deletedComment)
}
