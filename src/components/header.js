import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import MainLogo from "../components/MainLogo"

const Header = ({ siteTitle }) => (
  <header>
    <div className="headerLogo">
      <Link to="/">
        <MainLogo />
      </Link>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
