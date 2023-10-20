import React from 'react'
import { Button } from 'react-bootstrap'

const CreateOrder = ({addOrder}) => {
  return (
    <>  
        <Button className= "button container-sm container-sm col-md-6 col-lg-4 col-xl-3" onClick={addOrder}>Checkout</Button>
    </>
  )
}

export default CreateOrder