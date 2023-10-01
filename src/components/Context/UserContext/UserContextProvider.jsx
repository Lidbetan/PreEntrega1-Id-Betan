import React from 'react'
import { useState } from 'react'
import UserContext from './UserContext'
import useApiData from '/src/hooks/useApiData.jsx'

const UserContextProvider = ({ children }) => {

    const [user, setUser] = useState({
        name: "Luckyluke",
        age: 31
    })

    const [data, loading, error] = useApiData('https://fakestoreapi.com/products');
    console.log(data)

    const value = {
        user,
        data,
        loading,
        error,
    }
    /*En este caso el componente recibe {children} y lo sube a prop 
    lo inyecta en el proveedor*/
    return (
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider