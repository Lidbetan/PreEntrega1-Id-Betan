import React from 'react'
import { Button } from 'react-bootstrap'

const CreateOrder = ({addOrder}) => {
  return (
    <>  
        <Button onClick={addOrder}>Checkout</Button>
    </>
  )
}

export default CreateOrder