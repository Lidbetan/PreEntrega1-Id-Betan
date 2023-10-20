
import React, { useState, useEffect } from 'react'
import CartContext from './CartContext'



const CartContextProvider = ({ children }) => {
    const [cart, setCart] = useState([])
    const [total, setTotal] = useState(0)
    const [cartQ, setCartQ] = useState(0)
    // const [noStock, setNoStock] = useState(null)
    console.log("CARTCONTEXT", cart)
    // console.log("noStock es:", noStock)


    //Agrega un item al carrito por cantidad = counter
    const addItem = (item, q) => {
        //Comprueba que haya stock mayor al solicitado por el usuario
        if (item.stock < q) {
            alert("no stock")
        } else {
            //Verifico si el item que quiero agregar ya existe en el cart.
            const itemExist = cart.some(prod => prod.item.id === item.id)
            // console.log("Existe el item en el carrito?:", itemExist)
            if (itemExist) {
                const addSameItem = cart.map(prod => {
                    if (prod.item.id === item.id) {
                        prod.q = prod.q + q
                        return prod
                    }
                    return prod
                })
                setCart(addSameItem)
                console.log("Acá se ejecuta addItem para agregar un item ya existente")
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

    const cartCounter = () => {
        let totalItems = 0;
        cart.map((prod) => {
            totalItems += prod.q;
        });
        setCartQ(totalItems)
    }
    // Cada vez que cart se modifica, se vuelve a ejecutar totalPrice()
    useEffect(() => {
        console.log("Cart updated:", cart);
        totalPrice();
        cartCounter()
    }, [cart]);

    const values = {
        cart,
        addItem,
        removeItem,
        clear,
        total,
        cartQ,
        // noStock
    }



    return (
        <CartContext.Provider value={values}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider