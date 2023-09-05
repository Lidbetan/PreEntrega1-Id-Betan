import React from 'react'
import Button from 'react-bootstrap/Button';               


const Card = ({img, name, size, price}) => {
  return (
      <div className='d-flex flex-column align-items-center gap-1'>
        <img src={img} alt="fail-shirt"></img>
        <p className='fw-semibold'>{name}</p>
        <p>{size}</p>
        <p>{price}</p>
        <Button variant="primary">Add to cart</Button>{' '}
        
      </div>
  )
}

export default Card