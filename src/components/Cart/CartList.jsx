import React from 'react'

const CartList = ({cart}) => {
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

export default CartList