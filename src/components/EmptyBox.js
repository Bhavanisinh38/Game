import React from 'react';

// Images Common File
import * as Img from './Img';

export default function EmptyBox(props) {
    return (
        <>
            <div className={`empty-div-bx ${props.className}`} style={props.style}>
                <img className="empty-img" src={props.ei} alt={props.ei_alt} />
                <div className="empty-heading">{props.eh}</div>
                <div className="empty-sub-heading">{props.esh}</div>
            </div>
        </>
    );
}

EmptyBox.defaultProps = {
    ei: Img.empty,
    ei_alt: "Data is not available",
    eh: "Not Found",
    esh: "There are no new notifications",
}
