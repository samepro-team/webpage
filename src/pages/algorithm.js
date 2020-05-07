import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Algorithm = () => {
  const data = useStaticQuery(graphql`
  query {
    markdownRemark(frontmatter: {slug: {eq: "algorithm"}}) {
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
      <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} className="pageContents" />
    
    </Layout>
    </>
  )
  }

export default Algorithm
