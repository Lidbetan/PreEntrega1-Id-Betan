import React, { useState, useEffect } from 'react'
import CartContext from './CartContext'

const CartContextProvider = ({ children }) => {
    const [cart, setCart] = useState([])
    const [total, setTotal] = useState(0)
    console.log("CARTCONTEXT", cart)

    //Agrega un item al carrito por cantidad = counter
    const addItem = (item, q) => {

        //Verifico si el item que quiero agregar ya existe en el cart.
        const itemExist = cart.some(prod => prod.item.id === item.id)
        //Si existe, hago un map en el cual si el id del item a agregar coincide con 
        console.log("Existe el item en el carrito?:", itemExist)
        if (itemExist) {
            const itemStocked = cart.some(prod => prod.item.stock >= q)
            if (itemStocked) {
                //Si existe, se hace un map en el que a cada prod se le suma q(counter) a la cantidad.
                const addSameItem = cart.map(prod => {
                    if (prod.item.id === item.id) {
                        prod.q = prod.q + q
                        return prod
                    }
                }) 
                console.log("Acá se ejecuta addItem para agregar un item ya existente")

            } else{
                alert("Out of stock")
            }
        //En caso de no existir el item en el carrito toma el cart existente y le suma el item y q.  
        } else {
            setCart([
                ...cart,
                {
                    item, q
                }
            ])
            console.log("Acá se ejecuta addItem para agregar un item NO existente")
        }
    }

    const removeItem = (id) => {
        const newCart = cart.filter((el) => el.item.id !== id);
        setCart(newCart)
    }
    
    const clear = () => {
        setCart([])
    }
    //El siguiente método declara una variable newTotal y por cada elemento del cart le suma el producto del precio * cantidad y la asigna dicho valor a total con SetTotal.
    const totalPrice = () => {
        let newTotal = 0;
        cart.map((prod) => {
            newTotal += prod.item.price * prod.q;
        });
        setTotal(newTotal);
    };

    // Cada vez que cart se modifica, se vuelve a ejecutar totalPrice()
    useEffect(() => {
        totalPrice();
    }, [cart]);

    const values = {
        cart,
        addItem,
        removeItem,
        clear,
        total
    }
    return (
        <CartContext.Provider value={values}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider