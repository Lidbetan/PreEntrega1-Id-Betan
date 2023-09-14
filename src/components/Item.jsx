import React from 'react'
import Button from 'react-bootstrap/Button';



const Item = ({products}) => {
  return (
    <div className='d-flex flex-column align-items-center gap-1'>
      <img src={products.img} alt={products.alt}></img>
      <p className='fw-semibold'>{products.name}</p>
      <p>{products.price}</p>
      <Button variant="primary">Add to cart</Button>{' '}
    </div>
  )
}

export default Item

