import React, { useContext, useState, useEffect, useCallback } from 'react'
import ItemDetail from './ItemDetail'
import { Col } from 'react-bootstrap'
import CartContext from '../Context/CartContext/CartContext'
import { doc, getDoc, getFirestore } from "firebase/firestore"


const ItemDetailContainer = ({ id }) => {
  const { addItem, noStock } = useContext(CartContext)
  const [showAlert, setShowAlert] = useState(false)
  const [item, setItem] = useState(null);

  const onAdd = useCallback((counter) => {
    console.log("onAdd executes...")
    //Si el counter no es mayor a 0, no agrega nada al cart.
    if(counter > 0 ){
      addItem(item, counter)
    }else {
      setShowAlert(true)
    }
  },[addItem, item]);

  // const onAdd = (counter) => {
  //   console.log("onAdd executes...")
  //   //Si el counter no es mayor a 0, no agrega nada al cart.
  //   if(counter > 0 ){
  //     addItem(item, counter)
  //   }else {
  //     setShowAlert(true)
  //   }
  // };

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

  return (
    <Col className="d-flex justify-content-center" md={12}>
      {
        item !== null ?
        <ItemDetail item={item} onAdd={onAdd} noStock={noStock} />
        :
        <p>Loading...</p>
      }
      {
        showAlert 
      }
    </Col>


  )
}

export default ItemDetailContainer