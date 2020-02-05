import React from 'react';

import './avaliable-list-vehicle-item.styles.scss';

const AvaliableListVehicleItem = ({ 
    refProp , 
    imageUrl , 
    name , 
    vehiNo , 
    yardName , 
    perDay , 
    totalFare , 
    heightEle ,
}) => (
    <div 
        ref={refProp} 
        className="avaliableVehicleListItem" style={{ height : `${heightEle}px` }}
    >
        <img src={imageUrl} alt={name} />
        <div className="contWrap">
            <h5>{name}</h5>
            <div className="vehicleNo">{vehiNo}</div>
            <div className="yardName">{yardName}</div>
            <div className="perDay">Per day <span>{perDay}</span></div>
            <div className="totalFare">Total fare <span>{totalFare}</span></div>
        </div>
    </div>
);

export default AvaliableListVehicleItem;