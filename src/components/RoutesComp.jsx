import React from 'react'
import { Routes, Route } from 'react-router-dom';
//Pages
import Home from '../pages/Home'
import Contact from '../pages/Contact';
import Men from '../pages/Categories/Men';
import Women from '../pages/Categories/Women';
import Detail from '../pages/Detail';

const RoutesComp = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/contact' element={<Contact />} />
            {/* En este caso luego de la url detail tomo el id como una propiedad al asignarle ":id"
             y se la paso al useParams de Detail como prop.  */}
            <Route path='/item/:id' element={<Detail />} />
            <Route path='/category/men' element={<Men />} />
            <Route path='/category/women' element={<Women />} />
        </Routes>
    )
}

export default RoutesComp