import React from 'react'
import Card from './Card'

const ItemListContainer = ({ greeting }) => {
    return (
        <div><h1 className='text-center'>{greeting}</h1>
            <div className='wrapper d-flex m-auto justify-content-center p-3 flex-column flex-md-row gap-2'>
                <Card img="./src/assets/fail.png" name="Fail D&D" size="All sizes avaible" price="$24.99" />
                <Card img="./src/assets/led-zepp.png" name="Led Zeppelin IV" size="All sizes avaible" price="$24.99" />
            </div>

        </div>
    )
}

export default ItemListContainer