import React, { useEffect } from 'react';

interface ToastProps {
    message: string;
    show: boolean;
    onClose: () => void;
    delay?: number; // thời gian delay trước khi ẩn toast
}

const ErrorToast: React.FC<ToastProps> = ({ message, show, onClose, delay = 2000 }) => {
    useEffect(() => {
        if (show) {
            const timer = setTimeout(() => {
                onClose();
            }, delay);

            return () => clearTimeout(timer);
        }
    }, [show, onClose, delay]);

    return (
        <div className={`toast-container position-fixed bottom-0 end-0 p-3`} style={{ zIndex: 1055 }}>
            <div className={`toast ${show ? 'show' : 'hide'}`} role="alert" aria-live="assertive" aria-atomic="true">
                <div className="toast-header">
                    <small className='me-2'>
                        <i className="far fa-times-circle" style={{color: "#ff0000", fontSize: "20px"}}></i>
                    </small>
                    <strong className="me-auto">Thông Báo</strong>
                    <button type="button" className="btn-close" aria-label="Close" onClick={onClose}></button>
                </div>
                <div className="toast-body text-start">
                    {message}
                </div>
            </div>
        </div>
    );
};

export default ErrorToast;
