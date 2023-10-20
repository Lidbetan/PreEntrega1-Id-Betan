import React, { useEffect } from 'react'
import { Button } from 'react-bootstrap'
import useCounter from '../../hooks/useCounter'
import AddToast from '../Alerts/Toasts/AddToast'
import { useState } from 'react'
import CancelAddToast from '../Alerts/Toasts/CancelAddToast'





const Counter = ({ text, onAdd, item }) => {
    //Se actualiza cada vez que le doy click a increment o decrement.
    const { counter, increment, decrement } = useCounter()
    //El estado countCero se utiliza para renderizar condicionalmente el boton correspondiente a productos sin stock o cuando se ingresa un valor = 0 en el contador.
    const [countCero, setCountCero] = useState(false)

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
    }, [counter]);

    return (
        <div className='items-counter d-flex flex-row flex-wrap align-items-end justify-content-center justify-content-md-end gap-2'>
            {item.stock == 0 ? <p></p> : <Button className='button fw-semibold text-uppercase border border-0 p-1 mt-2' onClick={increment}>+</Button>}
            {item.stock == 0 ? <p></p> : <div className='counter'>{counter}</div>}
            {item.stock == 0 ? <p></p> : <Button className='button fw-semibold text-uppercase border border-0 p-1 mt-2' onClick={decrement}>-</Button>}

            {
                item.stock < counter ? <Button className='button container-sm col-md-4 fw-semibold text-uppercase border border-0 p-1 mt-2'>Out of stock.. </Button>
                    : countCero ?
                        <CancelAddToast>
                            <Button className='button container-sm col-md-4 fw-semibold text-uppercase border border-0 p-1 mt-2' onClick={() => onAdd(counter)}>{text}</Button>
                        </CancelAddToast>
                        :
                        <AddToast>
                            <Button className='button container-sm col-md-4 fw-semibold text-uppercase border border-0 p-1 mt-2' onClick={() => onAdd(counter)}>{text}</Button>
                        </AddToast>
            }


        </div>
    )
}

export default Counter