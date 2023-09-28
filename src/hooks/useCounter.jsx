import React, { useState } from 'react'

const useCounter = (initialValue = 0) => {

    
    const [counter, setCounter] = useState(initialValue)
        const increment = () => {
            setCounter( counter + 1 )
        }
        const decrement = () =>{
            if(counter > 0){
                setCounter( counter- 1 )
            }
        }

    return {counter, increment, decrement}
}

export default useCounter