import React, { useContext, useEffect } from 'react'
import { Button } from 'react-bootstrap'
import useCounter from '../../hooks/useCounter'
import AddToast from '../Alerts/Toasts/addToast'
import NoStockToast from '../Alerts/Toasts/NoStockToast'
import { useState } from 'react'
import CancelAddToast from '../Alerts/Toasts/CancelAddToast'





const Counter = ({ text, onAdd, noStock }) => {
    //Se actualiza cada vez que le doy click a increment o decrement.
    const { counter, increment, decrement } = useCounter()
    const [countCero, setCountCero] = useState(false)
    console.log("Counter se renderiza y countCero es:",countCero)

    //Esta funcion se encarga de dar true or false a countCero
    const cancelAdd = () => {
        if (counter == 0) {
            setCountCero(true)
        } else {
            setCountCero(false)
        }
    }
    //cancelAdd se ejecuta cada vez que el counter se actualice.
    useEffect(() => {
        cancelAdd();
    },[counter]);

    return (
        <div className='items-counter d-flex flex-row align-items-end justify-content-center justify-content-md-end gap-2'>
            <Button className='button fw-semibold text-uppercase border border-0 p-1 mt-2' onClick={increment}>+</Button>
            <div className='counter'>{counter}</div>
            <Button className='button fw-semibold text-uppercase border border-0 p-1 mt-2' onClick={decrement}>-</Button>
            {/* En este condicional si el estado noStock es true,arroja un alerta de que no hay stock de dicho producto, caso contrario, deja agregarlo al carrito y arroja un toast "Added to cart" */}

            {/* {   Cuando countCero es true, alerta con un TOAST que debe ingresar una cantidad, sino arroja el TOAST de agregado al carrito */}
                {countCero || noStock ?
                    <CancelAddToast>
                        <Button className='button fw-semibold text-uppercase border border-0 p-1 mt-2' onClick={() => onAdd(counter)}>{text}
                        </Button>
                    </CancelAddToast> 
                    :
                    <AddToast component="span" >
                        <Button className='button fw-semibold text-uppercase border border-0 p-1 mt-2' onClick={() => onAdd(counter)}>{text}</Button>
                    </AddToast>
            }

        </div>
    )
}

export default Counter