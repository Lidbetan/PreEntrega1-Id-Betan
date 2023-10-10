import React, { useContext } from 'react'
import CartContext from '../components/Context/CartContext/CartContext'
import CartList from '../components/Cart/CartList'

const CartDetail = () => {
    const { cart } = useContext(CartContext)
    return (
        <>
            <CartList cart={cart}/>
        </>
    )
}

export default CartDetail