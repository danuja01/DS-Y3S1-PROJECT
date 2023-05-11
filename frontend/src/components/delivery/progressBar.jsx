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
