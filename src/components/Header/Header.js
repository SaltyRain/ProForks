import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import "./Header.scss"

const Header = ({ siteTitle }) => (
  <header className="main-header container ">
    <div className="row justify-content-between align-items-center">
      <div className="col main-header__logo">
        <Link to="/">
          <img src={`../../images/logo.png`} alt="Вернуться на главную страницу ProForks"></img>
        </Link>
      </div>

      <nav className="col">
        <ul className="main-header__menu">
          <li><Link to="/shop">Магазин</Link></li>
          <li><Link to="/about">О нас</Link></li>
          <li className="main-header__basket"><Link to="/basket">К</Link></li>
        </ul>
      </nav>

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
