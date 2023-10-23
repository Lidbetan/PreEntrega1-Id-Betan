import React from 'react'
import { useParams } from 'react-router-dom'
import ItemDetailContainer from '../components/ItemDetails/ItemDetailContainer'
import { Container, Row } from 'react-bootstrap'
import BackHome from '../components/ItemDetails/BackHome'
//Con UseParams tomo lo
const Detail = () => {
  const { id } = useParams()

  return (
    <Container className='item-detail-wrapper'>
      <Row >
        <ItemDetailContainer id={id} />
        <BackHome/>
      </Row>
      
    </Container>
  )
}

export default Detail