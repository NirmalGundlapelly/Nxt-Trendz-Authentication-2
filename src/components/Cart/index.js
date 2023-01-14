// Write your JS code here
import './index.css'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'
import Header from '../Header'

const Cart = () => {
  const jwtToken = Cookies.get('jwt_token')
  if (jwtToken === undefined) {
    return <Redirect to="/login" />
  }

  return (
    <>
      <Header />
      <div className="car-container">
        <div className="image-container">
          <img
            className="cart-image"
            alt="cart"
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-img.png"
          />
        </div>
      </div>
    </>
  )
}

export default Cart
