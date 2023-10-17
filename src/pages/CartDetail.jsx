import React, { useContext } from 'react'
import CartContext from '../components/Context/CartContext/CartContext'
import CartList from '../components/Cart/CartList'
import { addDoc, collection, getFirestore } from 'firebase/firestore'

const CartDetail = () => {
    const { cart, removeItem, clear } = useContext(CartContext)
    const addOrder = () => {
        const purchase = {
            buyer:{
                id:1,
                name:"Lucas",
                Phone:3364336890,
                email:"libetan@gmail.com",
            },
            items:cart,
            date:new Date(),
            amount: 1000
        }
        // console.log("Mi orden",purchase)
        const db = getFirestore();
        const orderCollection = collection(db, "orders" );
    
        addDoc(orderCollection, purchase)
            .then(res => console.log("Orden enviada",res))
            .catch(err => console.log("Error al intentar subir la orden",err))
    };


    return (
        <>  
            <CartList cart={cart} removeItem={removeItem} clear={clear} order={addOrder}/>
        </>
    )
}

export default CartDetail