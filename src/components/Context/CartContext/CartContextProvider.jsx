import React, { useState } from 'react'
import CartContext from './CartContext'

const CartContextProvider = ({ children }) => {
    const [cart, setCart] = useState([])
    console.log("CONTEXT", cart)

    //
    const addItem = (item, q) => {
        //Verifico si el item que quiero agregar ya existe en el cart.
        const itemExist = cart.some(prod => prod.item.id === item.id)
        //Si existe, hago un map en el cual si el id del item a agregar coincide con 
        console.log(itemExist)
        if (itemExist) {
            //Si existe, se hace un map en el que a cada prod se le suma q(counter) a la cantidad.
            const addSameItem = cart.map(prod => {
                if (prod.item.id === item.id) {
                    prod.q = prod.q + q 
                    console.log(prod)
                    return prod
                } 
            })
            //En caso de no existir el item en el carrito toma el cart existente y le suma el item y q.
        } else {
            setCart([
                ...cart,
                {
                    item, q
                }
            ])
        }

    }

    const values = {
        cart,
        addItem
    }
    return (
        <CartContext.Provider value={values}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider