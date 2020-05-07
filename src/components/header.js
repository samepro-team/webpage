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
    <div className="mainNav">
      <ul>
        <li>
          <Link to="/#about">サメプロとは？</Link>
        </li>
        <li>
          <Link to="/#cource">コース</Link>
        </li>
        <li>
          <Link to="/#community">コミュニティ</Link>
        </li>
        <li>
          <Link to="/#team">運営メンバー</Link>
        </li>
      </ul>
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
