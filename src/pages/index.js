import React from "react"
import Button from "../components/Button"
import Layout from "../components/layouts/Layout"

export default function Home() {
  return(
  <Layout>
  <div className="text-center  h-screen   flex  items-center justify-center">
    <div className="py-5">
      <h1 className="text-4xl md:text-8xl  mb-12">Tailwind CSS Starter</h1>
      <Button variant="primary" size="sm" to="https://google.com">Button component</Button>
    </div>
  </div>
  </Layout>)
}
