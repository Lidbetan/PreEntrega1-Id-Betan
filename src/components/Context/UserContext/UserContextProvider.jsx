import React from 'react'
import { useState } from 'react'
import UserContext from './UserContext'

const UserContextProvider = ({ children }) => {

    const [user, setUser] = useState({
        name: "Luckyluke",
        age: 31
    })

    const value = {
        user,
        
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