import React from 'react'
import { useState, useEffect } from 'react'
import products from '../data/products';//Importa el archivo .js que simula ser la base de dato de los productos
import ItemList from './ItemList'

const ItemListContainer = ({ greeting }) => {
    //Estado para almacenar los datos de los productos, con un array vacío por default.
    const [data, setData] = useState([]);
    //Estado para controlar si la carga está en proceso
    const [loading, setLoading] = useState(true);
    //Estado para manejar errores
    const [error, setError] = useState(true);


    //Esta función simula una llamada asíncrona al servidor con un delay de 2seg
    const getProductos = () => new Promise((resolve, reject) => {
        let status = 200; //Simula la respuesta exitosa 
        setTimeout(()=>{
            if(status === 200){
                /*La resolucion de la promise es productos, a este punto falta asignar esa resolucion 
                a un estado, lo que se hace con setData*/
                resolve(products);
            }else {
                //Si la promesa se rechaza, salta el mensaje de error
                reject("Ups, algo salió mal");
            }
        }, 2000)
    });

    //useEffect se ejecuta cuando se renderiza el componente y ([]) indica que lo haga una única vez.
    useEffect(()=>{
    //Si no pusiera getProductos dentro de useEffect, cuando actualizara con setData se crearía un loop infinito
        getProductos()
        //Cuando resuelve, actualiza el estado
        .then((response)=>{
            setData(response);
        })
        //Si es reject, arroja el mensaje de error
        .catch((error)=>{
            setError(error);
        })
        //Independientemente del resultado, actualiza el estado de la carga
        .finally(()=>{
            setLoading(false)
        })
    }, []);
    
    return (
        <div>
            {loading && <p>Cargando...</p>}
            {error && <p>{error}</p>}
            <h1 className='greeting text-center mt-3 fw-bold'>{greeting}</h1>
            <div className='wrapper d-flex m-auto justify-content-center p-3 flex-column flex-md-row flex-wrap gap-2'>
                {data.map((prod)=>(
                    <ItemList key={prod.id} products={prod} />
                ))
                }
            </div>

        </div>
    )
}

export default ItemListContainer