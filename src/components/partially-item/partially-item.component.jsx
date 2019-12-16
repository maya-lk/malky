import React from 'react';

import AdultIcon from '../../assets/images/adults-icon.png';
import Bag from '../../assets/images/bag.png';
import Child from '../../assets/images/child.png';

import './partially-item.styles.scss';

const PartiallyItem = ({ imageUrl , name , bookingDetails }) => (
    <div className="partiallyItem">
        <div className="vehicleWrap">
            <img src={imageUrl} alt={name}/>
            <h3>{name}</h3>
        </div>
        <div className="details">

            <div className="detail">
                <div className="item">CWW -8989</div>
                <div className="item">8.00 PM</div>
                <div className="item">10.00 PM</div>
                <div className="item">Polhengoda</div>
                <div className="item">Siripala Batuwitage</div>
                <div className="item">
                    <span className="adults" style={{ backgroundImage : `url(${AdultIcon})` }}>4</span>
                    <span className="childs" style={{ backgroundImage : `url(${Bag})` }}>2</span>
                    <span className="bags" style={{ backgroundImage : `url(${Child})` }}>5</span>
                </div>
                <div className="item">
                    <span className="btn">Select</span>
                </div>
            </div>

            <div className="detail">
                <div className="item">CWW -8989</div>
                <div className="item">8.00 PM</div>
                <div className="item">10.00 PM</div>
                <div className="item">Polhengoda</div>
                <div className="item">Siripala Batuwitage</div>
                <div className="item">
                    <span className="adults" style={{ backgroundImage : `url(${AdultIcon})` }}>4</span>
                    <span className="childs" style={{ backgroundImage : `url(${Bag})` }}>2</span>
                    <span className="bags" style={{ backgroundImage : `url(${Child})` }}>5</span>
                </div>
                <div className="item">
                    <span className="btn">Select</span>
                </div>
            </div>

            <div className="detail">
                <div className="item">CWW -8989</div>
                <div className="item">8.00 PM</div>
                <div className="item">10.00 PM</div>
                <div className="item">Polhengoda</div>
                <div className="item">Siripala Batuwitage</div>
                <div className="item">
                    <span className="adults" style={{ backgroundImage : `url(${AdultIcon})` }}>4</span>
                    <span className="childs" style={{ backgroundImage : `url(${Bag})` }}>2</span>
                    <span className="bags" style={{ backgroundImage : `url(${Child})` }}>5</span>
                </div>
                <div className="item">
                    <span className="btn">Select</span>
                </div>
            </div>

            <div className="detail">
                <div className="item">CWW -8989</div>
                <div className="item">8.00 PM</div>
                <div className="item">10.00 PM</div>
                <div className="item">Polhengoda</div>
                <div className="item">Siripala Batuwitage</div>
                <div className="item">
                    <span className="adults" style={{ backgroundImage : `url(${AdultIcon})` }}>4</span>
                    <span className="childs" style={{ backgroundImage : `url(${Bag})` }}>2</span>
                    <span className="bags" style={{ backgroundImage : `url(${Child})` }}>5</span>
                </div>
                <div className="item">
                    <span className="btn">Select</span>
                </div>
            </div>

        </div>
    </div>
);

export default PartiallyItem;