/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql, Link } from "gatsby"

import Header from "./header"
import "./layout.scss"
import MainLogo from "./MainLogo"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
        <main>{children}</main>
        <footer>
          <div id="footerLogo">
            <Link to="/">
            <MainLogo />
            </Link>
          </div>
          <div id="footerLinks">
            <ul>
              <li>
                <Link to="tos">利用規約</Link>
              </li>
              <li>
                <Link to="privacy">プライバシーポリシー</Link>
              </li>
            </ul>
          </div>
          <div id="copyright">
            <span>&copy; {new Date().getFullYear()} Samepro</span>
          </div>
          
        </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
