import React from "react"
import Gallery from "../components/gallery-page"
import Layout from "../components/layout"
import Seo from "../components/seo"

const GalleryPage = () => {
  return (
    <Layout>
      <Seo
        title="РР Технологи - Gallery"
        description="RR Technologies - Moscow."
      ></Seo>
      <Gallery></Gallery>
    </Layout>
  )
}

export default GalleryPage
