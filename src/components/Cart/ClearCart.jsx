import React from 'react'
import { Button } from 'react-bootstrap'

const ClearCart = ({ clear }) => {

    return (
        <Button className='button' onClick={() => clear()}>Clear Cart</Button>
    )
}

export default ClearCart