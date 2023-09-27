import React from 'react'
import { useParams } from 'react-router-dom'
import ItemDetailContainer from '../components/ItemDetails/ItemDetailContainer'
import { Container, Row } from 'react-bootstrap'
//Con UseParams tomo lo
const Detail = () => {
  const { id } = useParams()

  return (
    <Container fluid>
      <Row >
        <ItemDetailContainer id={id} />
      </Row>
      
    </Container>
  )
}

export default Detail