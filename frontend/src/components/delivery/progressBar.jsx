import React, { useEffect, useRef } from 'react';
import './progressBar.css';

const ProgressBar = ({ progress, showPopup, handleClosePopup }) => {
    const progressBarRef = useRef(null);

    useEffect(() => {
        if (progressBarRef.current) {
            progressBarRef.current.style.width = `${progress}%`;
            if (progress === 25) {
                progressBarRef.current.textContent = 'Pending';
            } else if (progress === 50) {
                progressBarRef.current.textContent = 'Confirmed';
            } else if (progress === 75) {
                progressBarRef.current.textContent = 'Dispatched';
            }
            if (progress === 100) {
                progressBarRef.current.textContent = 'Delivered'
                progressBarRef.current.classList.add('full');
                // setShowPopup(true);
            } else {
                progressBarRef.current.classList.remove('full');
            }
        }
    }, [progress, showPopup]);

    return (
        <>
            {/* <div>
                {showPopup && (
                    <div className="popup">
                        <p>Item dispatched!</p>
                        <button className="popup-close" onClick={handleClosePopup}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                                <path fill="#ff0000" d="M16.54 5.046l-1.591-1.59-4.949 4.95-4.95-4.95-1.59 1.59 4.95 4.95-4.95 4.95 1.59 1.59 4.95-4.95 4.95 4.95 1.591-1.59-4.95-4.95z" />
                            </svg>
                        </button>
                    </div>
                )}
            </div> */}
            <div className="progress-bar">
                <div className="progress-bar-endpoint" />
                <div className="progress-bar-endpoint" />
                <div className="progress-bar-endpoint" />
                <div className="progress-bar-endpoint" />
                <div className="progress-bar-fill" ref={progressBarRef} />
            </div>
        </>
    );
};

export default ProgressBar;
