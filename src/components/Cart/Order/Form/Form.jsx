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

        <div className='d-flex m-auto w-75 justify-content-center p-2'>
            <form>
                <label htmlFor="name">Enter your name</label>
                <input onChange={handleChange} type='text' name="name" id="name" value={buyer.name}></input>
                <label htmlFor="email">Enter your e-mail</label>
                <input onChange={handleChange} type="text" name="email" id="email" value={buyer.email}></input>
            </form>
            <CreateOrder addOrder={addOrder} />
            {
                orderId && <span>Thank you for chosing us!<br />
                    The total of your purchase is:<br />
                    ${total}<br />
                    Your order ID is: {orderId}
                    <Link to="/">
                        <Button className='button' onClick={clear}>Back to Home</Button>
                    </Link>
                </span>
            }
        </div>

    )
}

export default Form