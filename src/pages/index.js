import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { PreRelease } from "../components/pre-release"
import { List } from "../components/list"
import { Testimonials } from "../components/testimonials"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <PreRelease />
    <List />
    <Testimonials />
  </Layout>
)

export default IndexPage
