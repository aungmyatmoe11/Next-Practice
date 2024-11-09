"use client"
export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error
  reset: () => void
}) {
  return (
    <>
      <div>Error in ReviewId {error.message}</div>
      <button onClick={reset}>Try again</button>
    </>
  )
}
