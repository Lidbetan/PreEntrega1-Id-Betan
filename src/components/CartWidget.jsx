import React from 'react'
import UserContext from './Context/UserContext'
import { UserDetail } from './UsetDetail/UserDetail'
const CartWidget = () => {
  return (
    <div className='d-flex flex-row'>
      {/* <img src='./src/assets/cart-icon-r.png' alt='cart-icon'></img>
        <p className='fw-bold p-1'>1</p> */}
      {/* <UserContext.Consumer value = {UserDetail}>

        {/* Welcome, {user.name}! */}

      {/* </UserContext.Consumer> */} 
    </div>
  )
}

export default CartWidget