import React from 'react'
import ItemDetail from './ItemDetail'
import useApiData from '../hooks/useApiData'

const ItemDetailContainer = () => {
    const [item] = useApiData('https://fakestoreapi.com/products/3')

  return (
    <div>
    {   
        item !== null && 
        <ItemDetail item={item}/>
    }
    </div>
  )
}

export default ItemDetailContainer