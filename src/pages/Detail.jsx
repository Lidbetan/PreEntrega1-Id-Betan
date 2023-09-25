import React from 'react'
import { useParams } from 'react-router-dom'
import ItemDetailContainer from '../components/ItemDetails/ItemDetailContainer'
//Con UseParams tomo lo
const Detail = () => {
    const {id} = useParams()
    
  return (
    <div><ItemDetailContainer id={id} /></div>
  )
}

export default Detail