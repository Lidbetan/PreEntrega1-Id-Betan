import { useState, useEffect } from 'react'
import ItemList from './ItemList'
//el método getFirestore es el que nos permite hacer la conexión a la base de datos.
import {collection, getDocs, getFirestore} from "firebase/firestore"
const ItemListContainer = ({ greeting }) => {
    
    const [products, setProducts] = useState([])

    useEffect(()=>{
        const db = getFirestore()

        const productsCollection = collection(db, "products")

        getDocs(productsCollection)
            .then(snapshot =>{
                const allData = snapshot.docs.map(document =>(
                    {
                    id: document.id,
                    ...document.data()
                    }
                    
                ))
                setProducts(allData)
            })
            .catch((err) => console.log(err))
    },[])
    return (
        <div>
            
            <h1 className='greeting text-center mt-3 fw-bold'>{greeting}</h1>
            <div className='products-wrapper d-flex mx-auto justify-content-center align-content-center p-3 flex-column flex-md-row flex-wrap gap-4'>
                {   products.length > 0 &&
                    products.map((prod)=>(
                    <ItemList key={prod.id} products={prod} />
                ))
                }
            </div>

        </div>
    )
}

export default ItemListContainer