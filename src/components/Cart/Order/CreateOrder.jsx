import React from 'react'
import { Button } from 'react-bootstrap'

const CreateOrder = ({order}) => {
  return (
    <>  
        <Button onClick={order}>Checkout</Button>
    </>
  )
}

export default CreateOrder