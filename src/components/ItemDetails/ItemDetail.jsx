import React from 'react'
import { Button } from 'react-bootstrap'
import Counter from '../Counter/Counter'

const ItemDetail = ({ item }) => {
  return (

    <div className='card detail-card d-flex flex-column p-4 mt-5 justify-content-between align-items-center text-center gap-1 p-1 flex-md-row justify-content-md-evenly  '>
      <img className="product-image" src={item.image}></img>
      <div className='detail-content container-md text-md-end p-md-3'>
        <p className='fw-bold text-uppercase'>{item.title}</p>
        <p className='fw-semibold'>${item.price}</p>
        <p>{item.description}</p>
        <div>
            <Counter/>
            <Button className='button fw-semibold text-uppercase border border-0 p-1 mt-2'>Add to Cart</Button>
        </div>
      </div>
          

    </div>

  )
}

export default ItemDetail