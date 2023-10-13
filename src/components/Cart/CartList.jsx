import React from 'react'
import RemoveItem from './RemoveItem'
import OrderButton from './Order/OrderButton'

const CartList = ({ cart }) => {
    return (
        <div className='w-50 m-auto p-5'>
            <ul>
                {cart.map(prod => (

                    <li key={prod.item.id} className='d-flex flex-direction-row justify-content-between p-1'>
                        <p className='w-25'>{prod.item.title}</p>
                        <p>{prod.q}</p>
                        <p>${prod.item.price}</p>
                        <RemoveItem />
                    </li>
                
                ))
                }
            
            </ul>
            <OrderButton/>

        </div>
    )
}

export default CartList