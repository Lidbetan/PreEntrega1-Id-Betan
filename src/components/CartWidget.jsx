import {React, useContext} from 'react'
import { Link } from 'react-router-dom'
import CartContext from './Context/CartContext/CartContext'


const CartWidget = () => {
  const{cartQ} = useContext(CartContext)
  return (
    <div className='d-flex flex-row'>
      <Link to="/cart">
        <img src='https://i.postimg.cc/rFcDCBc6/cart-icon-r.png' alt='cart-icon'></img>
      </Link>
      <p className='fw-bold p-1'>{cartQ}</p>
    </div>
  )
}

export default CartWidget
