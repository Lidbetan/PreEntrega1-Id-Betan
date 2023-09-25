import React from 'react'
import ItemDetail from './ItemDetail'
import useApiData from '/src/hooks/useApiData.jsx'

const ItemDetailContainer = ({id}) => {
    const [item] = useApiData(`https://fakestoreapi.com/products/${id}`)

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