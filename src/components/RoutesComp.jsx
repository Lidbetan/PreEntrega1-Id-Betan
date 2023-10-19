import React from 'react'
import { Routes, Route } from 'react-router-dom';
//Pages
import Home from '../pages/Home'
import Contact from '../pages/Contact';
import Detail from '../pages/Detail';
import CartDetail from '../pages/CartDetail';
import DandD from '../pages/Categories/D&D';
import Rock from '../pages/Categories/Rock';

const RoutesComp = () => {
    return (
        <>  
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/contact' element={<Contact />} />
                    <Route path='/item/:id' element={<Detail />} />
                    <Route path='/category/rock' element={<Rock />} />
                    <Route path='/category/D&D' element={<DandD />} />
                    <Route path='/cart' element={<CartDetail />} />
                </Routes>

        </>
    )
}

export default RoutesComp