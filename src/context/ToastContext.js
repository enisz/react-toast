import React, { createContext, useCallback, useEffect, useState } from 'react';
import './ToastContext.css';

const ToastContext = createContext();

export default ToastContext;

export function ToastContextProvider({ children }) {
    const [toasts, setToasts] = useState([]);

    useEffect(() => {
        if(toasts.length > 0) {
            const timer = setTimeout(
                () => setToasts(toasts => toasts.slice(1)),
                3000
            );

            return () => clearTimeout(timer);
        }
    });

    const addToast = useCallback(
        toast => setToasts(toasts => [...toasts, toast]),
        [setToasts]
    );

    return (
        <ToastContext.Provider value={addToast}>
            {children}
            <div className="toast-container">
                { toasts.map((toast,index) => (
                        //<div className="toast show" role="alert" aria-live="assertive" aria-atomic="true" key={`toast-${index}`}>
                        //    <div className="toast-header">

                        //        <strong className="me-auto">Bootstrap</strong>
                        //        <small>11 mins ago</small>
                        //        <button type="button" className="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
                        //    </div>
                        //    <div className="toast-body">
                        //        {toast}
                        //    </div>
                        //</div>

                        <div className={`alert alert-${toast.type} d-flex flex-row`} key={`toast-${index}`} >
                            <div className="d-flex align-items-center">
                                <i class="fas fa-exclamation-triangle fa-2x me-3"></i>
                            </div>
                            <div>
                                <h5 className="alert-heading">{toast.title}</h5>
                                {toast.message}
                            </div>
                        </div>
                    )
                )}
            </div>
        </ToastContext.Provider>
    );
}