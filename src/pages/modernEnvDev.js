import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ModernEnvDev = () => {
  const data = useStaticQuery(graphql`
  query {
    markdownRemark(frontmatter: {slug: {eq: "modernEnvDev"}}) {
      html
      frontmatter {
        title
      }
    }
  }
  `)
  return (
    <>
    <Layout>
    <SEO title={data.markdownRemark.frontmatter.title} />
      <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
    
    </Layout>
    </>
  )
  }

export default ModernEnvDev
