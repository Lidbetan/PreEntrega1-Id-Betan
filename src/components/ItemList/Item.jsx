import React from 'react'
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';



const Item = ({ products }) => {
  return (
    <div className='card d-flex flex-column justify-content-between align-items-center text-center gap-1 p-1'>
      <img className="product-image" src={products.image}></img>
      <p className='fw-semibold'>{products.title}</p>
      <p>${products.price}</p>
      <Link to={`/detail/${products.id}`}>
        <Button variant="primary">View details</Button>{' '}
      </Link>
    </div>
  )
}

export default Item

