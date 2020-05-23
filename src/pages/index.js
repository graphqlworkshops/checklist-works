import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { List } from "../components/list"
import { Testimonials } from "../components/testimonials"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <List />
    <Testimonials />
  </Layout>
)

export default IndexPage
