import React from 'react'
import useApiData from "/src/hooks/useApiData.jsx"
import ItemList from '../../components/ItemList/ItemList'

const Women = () => {
  const [data,loading,error] = useApiData(`https://fakestoreapi.com/products/category/women's clothing`)
  console.log(data)
  return (

    <div>
            {loading && <p>Cargando...</p>}
            {error && <p>{error}</p>}
            <h1 className='greeting text-center mt-3 fw-bold'>Women Clothes</h1>
            <div className='wrapper d-flex m-auto justify-content-center align-content-center p-3 flex-column flex-md-row flex-wrap gap-2'>
                {data.map((prod)=>(
                    <ItemList key={prod.id} products={prod} />
                ))
                }
            </div>

        </div>
  )
}

export default Women