import React from 'react'
import { Button } from 'react-bootstrap'

const CreateOrder = ({addOrder}) => {
  return (
    <>  
        <Button className= "button" onClick={addOrder}>Checkout</Button>
    </>
  )
}

export default CreateOrder