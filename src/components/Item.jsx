import React from 'react'
import Button from 'react-bootstrap/Button';



const Item = ({products}) => {
  return (
    <div className='card d-flex flex-column justify-content-between align-items-center text-center gap-1 p-1'>
      <img className="product-image"src={products.image}></img>
      <p className='fw-semibold'>{products.title}</p>
      <p>${products.price}</p>
      <Button variant="primary">View details</Button>{' '}
    </div>
  )
}

export default Item

