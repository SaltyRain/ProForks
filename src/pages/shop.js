import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout/Layout"
import Image from "../components/image"
import Product from "../components/Product/Product"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="ProForks | Магазин" />
    <Product/>
    <Product/>
    <Product/>
    <Product/>
  </Layout>
)

export default IndexPage
