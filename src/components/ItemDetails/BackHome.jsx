import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'

const BackHome = () => {
    return (
        <Link to="/">
            <Button className='button home col-md-1 justify-content-center align-items-center'>
                <img src="https://i.postimg.cc/0Nv9pymY/home-alt-2-solid-24.png"></img>
            </Button>
        </Link>
    )
}

export default BackHome