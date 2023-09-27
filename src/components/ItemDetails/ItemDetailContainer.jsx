import React from 'react'
import ItemDetail from './ItemDetail'
import useApiData from '/src/hooks/useApiData.jsx'
import { Col } from 'react-bootstrap'

const ItemDetailContainer = ({ id }) => {
  const [item] = useApiData(`https://fakestoreapi.com/products/${id}`)

  return (
    <Col className="d-flex justify-content-center" md={12}>
      {
        item !== null &&
        <ItemDetail item={item} />
      }
    </Col>


  )
}

export default ItemDetailContainer