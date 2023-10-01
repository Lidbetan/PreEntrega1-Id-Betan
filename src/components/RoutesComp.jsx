import React from 'react'
import { Routes, Route } from 'react-router-dom';
//Pages
import Home from '../pages/Home'
import Contact from '../pages/Contact';
import Men from '../pages/Categories/Men';
import Women from '../pages/Categories/Women';
import Detail from '../pages/Detail';
import { UserDetail } from './UsetDetail/UserDetail';
import CartDetail from '../pages/CartDetail';

const RoutesComp = () => {
    return (
        <>  
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/contact' element={<Contact />} />
                    {/* En este caso luego de la url detail tomo el id como una propiedad al asignarle ":id"
                    y se la paso al useParams de Detail como prop.  */}
                    <Route path='/detail/:id' element={<Detail />} />
                    <Route path='/men' element={<Men />} />
                    <Route path='/women' element={<Women />} />
                    <Route path='/user' element={<UserDetail />} />
                    <Route path='/cart' element={<CartDetail />} />
                </Routes>

        </>
    )
}

export default RoutesComp