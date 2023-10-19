import React from 'react'

import { ToastContainer, toast } from 'react-toastify';


const toastMessage = () => toast('No stock avaiable '.toUpperCase(), {
    className: "custom-toast",
    position: "top-center",
    autoClose: 1500,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
});

const NoStockToast = ({ children }) => {
    return (
        <>
            <span className='toast-btn' onClick={toastMessage}>
                {children}
            </span>
            <ToastContainer className="custom-toast" />
        </>
    )
}

export default NoStockToast