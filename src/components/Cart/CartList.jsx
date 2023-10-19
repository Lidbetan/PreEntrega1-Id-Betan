import React, { useContext } from 'react'
import ClearCart from './ClearCart'
import { Button } from 'react-bootstrap'


const CartList = ({ cart, removeItem, clear, total }) => {
    return (
        <div className='cart-list container-sm my-2 mx-auto p-1'>
            <ul >

                {cart.length > 0 && cart.map(prod => (

                    <li key={prod.item.id} className='d-flex flex-direction-row justify-content-between align-items-center p-1'>
                        <p className='w-25'>{prod.item.title}</p>
                        <p>{prod.q}</p>
                        <p>${prod.item.price * prod.q}</p>
                        <Button className='button remove' onClick={() => removeItem(prod.item.id)}>Remove</Button>
                    </li>

                    ))
                    }
                <p className='total text-end my-1 fw-bold'>Total: ${total}</p>
                <ClearCart  clear={clear} />
            </ul>

        </div>
    )
}

export default CartList