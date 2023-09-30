import React, { useContext } from 'react'
import { useState, useEffect } from 'react'
// import products from '../data/products';//Importa el archivo .js que simula ser la base de dato de los productos
import ItemList from './ItemList'
import UserContext from '../Context/UserContext'
// import useApiData from '/src/hooks/useApiData.jsx'

const ItemListContainer = ({ greeting }) => {
    
    const {data,loading,error} = useContext(UserContext)
    return (
        <div>
            {loading && <p className='text-center fw-bold'>Cargando...</p>}
            {error && <p className='text-center fw-bold'>Ups..something has failed.. we are working to solve it.  </p>}
            <h1 className='greeting text-center mt-3 fw-bold'>{greeting}</h1>
            <div className='wrapper d-flex w-75 mx-auto justify-content-center align-content-center p-3 flex-column flex-md-row flex-wrap gap-2'>
                {data.map((prod)=>(
                    <ItemList key={prod.id} products={prod} />
                ))
                }
            </div>

        </div>
    )
}

export default ItemListContainer