import React from 'react';

import './avaliable-vehicle-item.styles.scss';

const AvaliableVehicleItem = ({ imageUrl , name , vehiNo , yardName , perDay , totalFare }) => (
    <div className="avaliableVehicleItem">
        <div className="imgWrap">
            {
                (imageUrl) ?
                <img src={imageUrl} alt={name} />
                : ''
            }
        </div>
        <h5>{name}</h5>
        <div className="avalibilityDetails">
            <div className="vehicleNo">{vehiNo}</div>
            <div className="yardName">{yardName}</div>
            <div className="perDay">Per day <span>{perDay}</span></div>
            <div className="totalFare">Total fare <span>{totalFare}</span></div>
        </div>
    </div>
);

export default AvaliableVehicleItem;