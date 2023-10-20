import React from 'react'
import ItemListContainer from '../components/ItemList/ItemListContainer'
//Solo necesarios al cargar productos
import { Button } from 'react-bootstrap'
import addData from "../data/addData"


const Home = () => {

  return (
    <>
      <ItemListContainer greeting={"Our products"} />
      {/* <Button onClick={addData}>Add Products</Button> */}
    </>
  )

}

export default Home