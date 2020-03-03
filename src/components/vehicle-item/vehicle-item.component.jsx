import React from 'react';

import './vehicle-item.styles.scss';

const VehicleItem = ({ imageUrl , name , numberPlate , yard , ID , type='radio' , perDay , totalFare }) => (
    <div className="vehicleItem">
        {
            (type === 'radio') ?
            <input 
                type="radio" 
                name="vehicle"
                id={`vehicle${ID}`}
                value={ID}
            />
            : (type === 'checkbox') ?
            <input 
                type="checkbox" 
                name="vehicle"
                id={`vehicle${ID}`}
                value={ID}
            />
            : ''
        }
        
        <label className="vehicleLable d-flex" htmlFor={`vehicle${ID}`}>
            <div className="vehicleImage">
                {
                    (imageUrl) ?
                    <img src={imageUrl} alt={name}/>
                    : ''
                }
            </div>
            <div className="vehicleContent">
                <h4 className="name">{name}</h4>
                <div className="numberPlate">{numberPlate}</div>
                <div className="yard">YARD : {yard}</div>
                <div className="perDay">Per day <span>{perDay}</span></div>
                <div className="totalFare">Total fare <span>{totalFare}</span></div>
            </div>
        </label>
    </div>
);

export default VehicleItem;