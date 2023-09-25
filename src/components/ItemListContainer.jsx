import React from 'react'
import { useState, useEffect } from 'react'
// import products from '../data/products';//Importa el archivo .js que simula ser la base de dato de los productos
import ItemList from './ItemList'
import useApiData from '../hooks/useApiData'

const ItemListContainer = ({ greeting }) => {
    const [data,loading,error] = useApiData('https://fakestoreapi.com/products')
    console.log(data)
    return (
        <div>
            {loading && <p>Cargando...</p>}
            {error && <p>{error}</p>}
            <h1 className='greeting text-center mt-3 fw-bold'>{greeting}</h1>
            <div className='wrapper d-flex m-auto justify-content-center align-content-center p-3 flex-column flex-md-row flex-wrap gap-2'>
                {data.map((prod)=>(
                    <ItemList key={prod.id} products={prod} />
                ))
                }
            </div>

        </div>
    )
}

export default ItemListContainer