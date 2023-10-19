import React from 'react'
import { ToastContainer, toast } from 'react-toastify';

const toastMessage = () => toast('Please specify an amount..'.toUpperCase(), {
    className: "custom-toast",
    position: "bottom-center",
    autoClose: 1500,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
});

const CancelAddToast = ({ children }) => {
    return (
        <>
            <span className='toast-btn' onClick={toastMessage}>
                {children}
            </span>
            <ToastContainer className="custom-toast" />
        </>
    )
}

export default CancelAddToast