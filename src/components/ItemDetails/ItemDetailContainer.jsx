import React, { useContext } from 'react'
import ItemDetail from './ItemDetail'
import useApiData from '/src/hooks/useApiData.jsx'
import { Col } from 'react-bootstrap'
import CartContext from '../Context/CartContext/CartContext'

const ItemDetailContainer = ({ id }) => {
  const [item] = useApiData(`https://fakestoreapi.com/products/${id}`)
  const {addItem} = useContext(CartContext)

  const onAdd = (counter)=> {
    addItem(item, counter)
  }

  return (
    <Col className="d-flex justify-content-center" md={12}>
      {
        item !== null &&
        <ItemDetail item={item} onAdd={onAdd} />
      }
    </Col>


  )
}

export default ItemDetailContainer