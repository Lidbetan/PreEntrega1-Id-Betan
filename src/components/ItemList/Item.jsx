import React from 'react'
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';



const Item = ({ products }) => {
  return (
    <div className='card d-flex flex-column p-3 justify-content-between align-items-center text-center gap-1 p-1'>
      <img className="product-image" src={products.img}></img>
      <p className='fw-bold text-uppercase'>{products.title}</p>
      <p className='fw-bold text-uppercase'>Stock:{products.stock}</p>
      <p className='fw-semibold'>${products.price}</p>
      <Link to={`/item/${products.id}`}>
        <Button className='button fw-semibold text-uppercase border border-0 p-1 mt-2' variant="primary">View details</Button>
      </Link>
    </div>
  )
}

export default Item

