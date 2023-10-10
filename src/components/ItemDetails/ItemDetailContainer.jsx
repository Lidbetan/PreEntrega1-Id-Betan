import React, { useContext, useState, useEffect } from 'react'
import ItemDetail from './ItemDetail'
import useApiData from '/src/hooks/useApiData.jsx'
import { Col } from 'react-bootstrap'
import CartContext from '../Context/CartContext/CartContext'
import { doc, getDoc, getFirestore } from "firebase/firestore"


const ItemDetailContainer = ({ id }) => {
  // const [item] = useApiData(`https://fakestoreapi.com/products/${id}`)
  const { addItem } = useContext(CartContext)
  const [item, setItem] = useState(null);
  const onAdd = (counter) => {
    //Si el counter no es mayor a 0, no agrega nada al cart.
    if(counter > 0){
      addItem(item, counter)
    }else {
      alert("Please refer how many items you want to add to cart")
    }
  }
  useEffect(() => {
    /*Instanciamos Firestore dentro de db*/
    const db = getFirestore()
    /*el método doc recibe tres parámetros: 
    el servicio al que queremos contactar (db), la coleccion desde la que necesitamos traer datos(products) y el ID del documento al que queremos acceder
    Esto lo que nos devuelve es una REFERENCIA al documento*/
    const itemRef = doc(db, "products", id)
    /*con getDoc vamos a traer la información acerca de ese documento. 
    Este recibe la REFERENCIA (itemRef) y devuelve una PROMESA*/
    getDoc(itemRef)
      /*Por convencion se recibe snapshot, el método exist 
      me arroja true or false, en caso que exista o no algun contenido dentro del documento.*/
      .then((snapshot) => {
        console.log("getDoC promise arroja:", snapshot.exists())
        if (snapshot.exists()) {
          /*El id no forma parte de la data, es parte de una capa anterior del documento,
          por lo que se lo tengo que agregar*/
          setItem({
            id: snapshot.id,
            ...snapshot.data()
          })
        }
      })
      .catch((err) => console.log("getDoc promise arroja",err))

  }, [])
  // console.log(item)

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