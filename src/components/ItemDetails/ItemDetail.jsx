import React from 'react'
import Counter from '../Counter/Counter'


const ItemDetail = ({ item, onAdd}) => {
  return (

    <div className='detail-card d-flex flex-column p-4 mt-5 justify-content-between align-items-center text-center gap-1 p-1 flex-md-row justify-content-md-evenly  '>
      <img className="product-image" src={item.img}></img>
      <div className='detail-content container-sm text-md-end p-md-3 '>
        <p className='fw-bold text-uppercase'>{item.title}</p>
        <p className='fw-semibold'>${item.price}</p>
        <p>{item.description}</p>
        <div className='counter-container container-sm'>
            <Counter text="Add to Cart" onAdd={onAdd} item={item}/>
        </div>
      </div> 
    </div>

  )
}

export default ItemDetail