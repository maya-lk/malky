import React from 'react';

import './avaliable-vehicle-item.styles.scss';

const AvaliableVehicleItem = ({ imageUrl , name , count , yardName }) => (
    <div className="avaliableVehicleItem">
        <img src={imageUrl} alt={name} />
        <h5>{name}</h5>
        <div className="avalibilityDetails">
            <span className="avalibilityCount">
                <span>{count}</span> <br/> Available
            </span>
            <span className="yardWrap">
                YARD <span className="yardName">{yardName}</span>
            </span>
        </div>
    </div>
);

export default AvaliableVehicleItem;