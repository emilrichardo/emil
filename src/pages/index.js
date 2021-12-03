import React from "react"
import Button from "../components/Button"
import Layout from "../components/layouts/Layout"

export default function Home() {
  return(
  <Layout>

  <div className="text-center min-h-screen h-screen  py-20">
    <h1 className="text-4xl  mb-12">Tailwind CSS Starter</h1>
    <Button variant="primary" size="sm" to="https://google.com">Button component</Button>

  </div>
  <div className="bg-primary h-screen"></div>

  </Layout>)
}
