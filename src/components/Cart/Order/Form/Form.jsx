import React from 'react'
import { useState } from 'react'
import CreateOrder from '../CreateOrder'
import { addDoc, collection, getFirestore } from "firebase/firestore"
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'

const Form = ({ cart, total, clear }) => {
    const [orderId, setOrderId] = useState("")
    const [buyer, setBuyer] = useState({
        name: "",
        email: ""
    })
    //Funcion que crea una compra con los datos del comprador, los elementos del cart, fecha y total
    const addOrder = () => {
        const purchase = {
            buyer,
            items: cart,
            date: new Date(),
            total: total
        }
        const db = getFirestore();
        const orderCollection = collection(db, "orders");
        addDoc(orderCollection, purchase)
            .then(res => setOrderId(res.id))
            .catch(err => console.log("There was en error in the process.. please try again", err))

    }

    //handleChange se encarga de manejar los eventos que generan cambios en los inputs del Form
    const handleChange = (e) => {
        const { target } = e;
        setBuyer({
            ...buyer,
            [target.name]: target.value,
        })
    }

    return (

        <div className='form-ticket-wrapper'>
            <form className='form-container container-sm col-md-10 col-lg-8 col-xl-6  '>
                <label className="container-sm col-md-6 col-lg-4 col-xl-3" htmlFor="name">Enter your name:</label>
                <input className="container-sm col-md-6 col-lg-4 col-xl-3" onChange={handleChange} type='text' name="name" id="name" value={buyer.name}></input>
                <label className="container-sm col-md-6 col-lg-4 col-xl-3" htmlFor="email">Enter your e-mail:</label>
                <input className="container-sm col-md-6 col-lg-4 col-xl-3" onChange={handleChange} type="text" name="email" id="email" value={buyer.email}></input>
            <CreateOrder addOrder={addOrder} />
            </form>
            {
                orderId &&
                <div className='order-ticket'>
                        <h2>Thank you for chosing us!</h2>
                        <p>The total of your purchase is: ${total}</p>
                        <p>Your order ID is: <span>{orderId}</span></p>
                        <Link to="/">
                            <Button className='button' onClick={clear}>Back to Home</Button>
                        </Link>
            
                </div>



            }
        </div>

    )
}

export default Form