import React, { useContext } from 'react'
import UserContext from '../Context/UserContext/UserContext'

export const UserDetail = () => {
     //Me estoy trayendo el contexto que cree con UserContext, en este caso el obj user declarado en app.jsx
    const {user} = useContext(UserContext)
    console.log(user)

  return (
    <div>
        <h4>UserDetail</h4>
        <p>Name: {user.name}</p>
        <p>Age: {user.age}</p>
    </div>
  )
}
