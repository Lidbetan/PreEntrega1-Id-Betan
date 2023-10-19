import React from 'react'

import { ToastContainer, toast } from 'react-toastify';


const toastMessage = () => toast('Added to cart '.toUpperCase(), {
    className:"custom-toast",
    position: "bottom-right",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    });

const AddToast = ({ children }) => {
    return (
        <>
            <span className='toast-btn' onClick={toastMessage}>
                {children}
            </span>
            <ToastContainer />
        </>
    )
}

export default AddToast