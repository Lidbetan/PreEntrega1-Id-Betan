import React from 'react'
import { useParams } from 'react-router-dom'

//Con UseParams tomo lo
const Detail = () => {
    const {id} = useParams()
    console.log(id)
  return (
    <div>Detail</div>
  )
}

export default Detail