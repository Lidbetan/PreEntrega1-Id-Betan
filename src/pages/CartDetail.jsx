import React, { useContext } from 'react'
import CartContext from '../components/Context/CartContext/CartContext'
import CartList from '../components/Cart/CartList'
import Form from '../components/Cart/Order/Form/Form'




const CartDetail = () => {
    const { cart, removeItem, clear, total } = useContext(CartContext)

    return (
        <>
            {cart.length > 0 &&

                <div className='cart-wrapper align-items-center'>
                    <CartList cart={cart} removeItem={removeItem} clear={clear} total={total} />
                    <Form cart={cart} total={total} clear={clear}/>
                </div>
            }



        </>
    )
}

export default CartDetail