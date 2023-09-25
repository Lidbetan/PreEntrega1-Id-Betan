import React from 'react'

const ItemDetail = ({item}) => {
  return (
    
    <div className='card d-flex flex-column justify-content-between align-items-center text-center gap-1 p-1'>
      <img className="product-image"src={item.image}></img>
      <p className='fw-semibold'>{item.title}</p>
      <p>${item.price}</p>
      <p>{item.description}</p>
    
    </div>

  )
}

export default ItemDetail