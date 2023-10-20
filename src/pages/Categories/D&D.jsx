import React from 'react'
import { useState, useEffect } from 'react'
import ItemList from '../../components/ItemList/ItemList'
import { collection, getDocs, getFirestore, query, where } from "firebase/firestore"

const DandD = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        const db = getFirestore()
        const productsCollection = collection(db, "products")
        const q = query(productsCollection, where("category", "==", "D&D"))
        getDocs(q)
            .then(snapshot => {
                const allData = snapshot.docs.map(document => (
                    {
                        id: document.id,
                        ...document.data()
                    }

                ))
                setProducts(allData)
            })
            .catch((err) => console.log(err))
    }, [])
    return (

        <div>

            <h1 className='greeting text-center mt-3 fw-bold'>D&D t-shirts</h1>
            <div className='wrapper d-flex w-75 m-auto justify-content-center align-content-center p-3 flex-column flex-md-row flex-wrap gap-4'>
                {products.map((prod) => (
                    <ItemList key={prod.id} products={prod} />
                ))
                }
            </div>

        </div>
    )
}

export default DandD