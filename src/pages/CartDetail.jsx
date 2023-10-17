import React, { useContext, useState } from 'react'
import CartContext from '../components/Context/CartContext/CartContext'
import CartList from '../components/Cart/CartList'
import Form from '../components/Form/Form'


const CartDetail = () => {
    const { cart, removeItem, clear, total, totalPrice } = useContext(CartContext)
    
    return (
        <>
            <CartList cart={cart} removeItem={removeItem} clear={clear} />
            <Form cart={cart} total={total}/>

        </>
    )
}

export default CartDetail