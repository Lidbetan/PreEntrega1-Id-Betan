import React from 'react'
import { Button } from 'react-bootstrap'

const ClearCart = ({ clear }) => {

    return (
        <Button className='button clear text-uppercase container-sm col-md-3' onClick={() => clear()}>Clear Cart</Button>
    )
}

export default ClearCart