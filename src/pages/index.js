import React from "react"
import Button from "../components/Button"

export default function Home() {
  return(
  <>
  <div className="text-center min-h-screen  py-20">
    <h1 className="text-4xl  mb-12">Tailwind CSS Starter</h1>
    <Button variant="primary" size="sm" to="https://google.com">Button component</Button>
  </div>

  </>)
}
