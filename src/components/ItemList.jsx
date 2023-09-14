import React from 'react'
import Item from './Item'; 

const ItemList = ({ products }) => {
    return (
        <>
            <div className='d-flex flex-column align-items-center gap-1'>
                <Item products={products}/>
            </div>
        </>

    )
}

export default ItemList