import Image from "next/image"
import Link from "next/link"

export default function Home() {
  return (
    <>
      <h1>Welcome Home!</h1>
      <Link href="/register">Register</Link>
      <Link href="/products">Products</Link>
      <Link href="/products/1">Products 1</Link>
      <Link href="/photo-feed">Photo Feed</Link>
    </>
  )
}
