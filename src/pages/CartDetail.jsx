import React, { useContext } from 'react'
import CartContext from '../components/Context/CartContext/CartContext'

const CartDetail = () => {
    const { cart } = useContext(CartContext)
    return (
        <div className=''>
            <ul>
                {cart.map(prod => (

                    
                    <li key={prod.item.id} className='d-flex'>
                        <p className='w-50'>{prod.item.title}</p>
                        <p>{prod.q}</p>
                        <p>${prod.item.price}</p>
                        
                    </li>


                ))
                }
            </ul>

        </div>
    )
}

export default CartDetail