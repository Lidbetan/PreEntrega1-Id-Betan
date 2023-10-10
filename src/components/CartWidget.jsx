import {React, useContext} from 'react'
import UserContext from './Context/UserContext/UserContext'
import { Link } from 'react-router-dom'


const CartWidget = () => {
  const { user } = useContext(UserContext)
  return (
    <div className='d-flex flex-row'>
      <Link to="/cart">
        <img src='https://i.postimg.cc/rFcDCBc6/cart-icon-r.png' alt='cart-icon'></img>
      </Link>
      <p className='fw-bold p-1'>1</p>


      <p>Welcome, {user.name}! </p>


    </div>
  )
}

export default CartWidget