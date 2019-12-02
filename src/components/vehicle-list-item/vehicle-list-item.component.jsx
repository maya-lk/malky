import React from 'react';

import PassengersIcon from '../../assets/images/pax.png';
import LaguageIcon from '../../assets/images/backpack.png';

import './vehicle-list-item.styles.scss';

const VehicleListItem = ({ title , startPrice , imageUrl , passengers , laguage }) => (
    <div className="vehicleListItem">
        <h4>{title}</h4>
        {
            (startPrice)?
            <div className="price">Starting from <span>{startPrice}</span></div>
            : ''
        } 
        <div className="imgWrap">
            {
                (imageUrl)?
                <img src={imageUrl} alt={title}/>
                : ''
            }
        </div>
        <div className="metaWrap">
            {
                (passengers)?
                <div className="meta">
                    <span className="icon" style={{ backgroundImage : `url(${PassengersIcon})` }} />
                    {passengers} pax
                </div>
                : ''
            }
            {
                (laguage)?
                <div className="meta">
                    <span className="icon" style={{ backgroundImage : `url(${LaguageIcon})` }} />
                    {laguage} item
                </div>
                : ''
            }

            <span className="btn bookNow">Book Now</span>
        </div>
    </div>
);

export default VehicleListItem;