import React, { useEffect, useState } from 'react';

// Css File
import '../css/flashmessage.css'

export default function FlashMessagetwo() {
    const [isPopupVisible, setPopupVisible] = useState(false);

    useEffect(() => {
        let popupTimer;

        if (isPopupVisible) {
            // Start a timer to hide the popup after 5 seconds
            popupTimer = setTimeout(() => {
                setPopupVisible(false);
            }, 2000);
        }

        return () => {
            // Clear the timer when the component unmounts or when isPopupVisible changes
            clearTimeout(popupTimer);
        };
    }, [isPopupVisible]);

    const handlefmp = () => {
        setPopupVisible(true);
    };

    const handlefmpclose = () => {
        setPopupVisible(false);
    };

    return (
        <>
             <div className="cmp-btn" onClick={handlefmp}><i className="fa fa-commenting-o" aria-hidden="true"></i></div>

            {/* --- for color fmt-red, fmt-green --- */}
            <div className={`flash-message-two ${isPopupVisible ? 'active fmt-green' : ''}`}>
                <span className="close-icon msg-close" onClick={handlefmpclose}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="38" d="M368 368L144 144M368 144L144 368"/></svg>
                </span>
                Lorem Ipsum is simply dummy text <span>$10,000</span> of the printing and typesetting industry.
            </div>
        </>
    );
}
