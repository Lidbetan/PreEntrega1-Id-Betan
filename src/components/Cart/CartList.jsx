import React, { useContext } from 'react'
import ClearCart from './ClearCart'


const CartList = ({cart, removeItem, clear}) => {
    return (
        <div className='container-sm m-auto p-5'>
            <ul>
            
                {cart.length > 0  && cart.map(prod => (

                    <li key={prod.item.id} className='d-flex flex-direction-row justify-content-between p-1'>
                        <p className='w-25'>{prod.item.title}</p>
                        <p>{prod.q}</p>
                        <p>${prod.item.price * prod.q}</p>
                        <button onClick={()=>removeItem(prod.item.id)}>Remove</button>
                    </li>
                
                ))
                }
            
            </ul>
            <ClearCart clear={clear}/>
            
        </div>
    )
}

export default CartList