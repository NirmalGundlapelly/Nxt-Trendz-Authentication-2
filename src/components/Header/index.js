import './index.css'
import Cookies from 'js-cookie'
import {Link, withRouter} from 'react-router-dom'

const Header = props => {
  const {history} = props

  const onClickLogout = () => {
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  return (
    <nav className="nav-header">
      <div className="nav-content">
        {/* For mobile */}
        <div className="nav-bar-mobile-logo-container">
          <img
            className="website-logo"
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
            alt="website logo"
          />

          <button
            onClick={onClickLogout}
            type="button"
            className="nav-mobile-btn"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-log-out-img.png"
              alt="nav logout"
              className="nav-bar-img"
            />
          </button>
        </div>

        <div className="nav-content nav-bar-large-container">
          <img
            className="website-logo"
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
            alt="website logo"
          />
          <ul className="nav-menu">
            <Link className="nav-menu-link" to="/">
              <li className="nav-menu-item">Home</li>
            </Link>
            <Link className="nav-menu-link" to="/products">
              <li className="nav-menu-item">Products</li>
            </Link>
            <Link className="nav-menu-link" to="/cart">
              <li className="nav-menu-item">Cart</li>
            </Link>
          </ul>
          <button
            onClick={onClickLogout}
            type="button"
            className="logout-desktop-btn"
          >
            Logout
          </button>
        </div>
      </div>
      <div className="nav-menu-mobile">
        <ul className="nav-menu-list-mobile">
          <li className="nav-menu-item-mobile">
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-icon.png"
              alt="nav home"
              className="nav-bar-img"
            />
          </li>

          <li className="nav-menu-item-mobile">
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-icon.png"
              alt="nav products"
              className="nav-bar-img"
            />
          </li>

          <li className="nav-menu-item-mobile">
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-icon.png"
              alt="nav cart"
              className="nav-bar-img"
            />
          </li>
        </ul>
      </div>
    </nav>
  )
}
export default withRouter(Header)
