import React from 'react';
import { Select } from 'antd';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectAllVehicles , selectTypes , selectModels } from '../../redux/vehicles/vehicles.selectors';

import AvaliableVehicleItem from '../../components/avaliable-vehicle-item/avaliable-vehicle-item.component';
import PartiallyItem from '../../components/partially-item/partially-item.component';

import './availability-calender.styles.scss';
import '@fullcalendar/core/main.css';
import '@fullcalendar/daygrid/main.css';

const { Option } = Select;

const AvailabilityCalender = ({ allVehicles , types , models }) => {
    return(
        <div className="availabilityCalenderWrap d-flex flex-wrap">
            <div className="availabilityDetails">
                <h1>
                    Availability Calender
                    <div className="btnsWrap">
                        <Link className="btn" to="/availability-calender-list"><i className="fas fa-bars"></i></Link>
                        <Link className="btn active" to="/availability-calender"><i className="fas fa-th-large"></i></Link>
                    </div>
                </h1>
                <div className="availabileVehiclesWrap">
                    <div className="filter d-flex justify-content-between align-items-center">
                        <h3>Avaliable Vehicles</h3>
                        <div className="filters">

                            <div className="form-group">
                                <Select
                                    placeholder="Vehicle Type"
                                >
                                    {
                                        (types && types.length > 0) ?
                                        types.map( type => <Option key={type} value={type}>{type}</Option> )
                                        : ''
                                    }
                                </Select>
                            </div>

                            <div className="form-group">
                                <Select
                                    placeholder="Vehicle Model"
                                >
                                    {
                                        (models && models.length > 0) ?
                                        models.map( model => <Option key={model} value={model}>{model}</Option> )
                                        : ''
                                    }
                                </Select>
                            </div>

                        </div>
                    </div>

                    <div className="vehicles">

                        {
                            (allVehicles) ?
                            allVehicles
                            .map( 
                                vehicle => 
                                <AvaliableVehicleItem 
                                    key={vehicle.name}
                                    imageUrl={vehicle.pic}
                                    name={vehicle.name}
                                    count="7"
                                    yardName="Kirulapana"
                                />
                            )
                            : ''
                        }

                    </div>

                </div>
            </div>

            <div className="avalabilityCalender">
                <div className="date">Friday 6<sup>th</sup> of December</div>
                <div className="booking">
                    There are <span className="bookingCount">7 Booking</span> for the Day
                </div>

                <div className="calenderWrap">
                    <FullCalendar defaultView="dayGridMonth" plugins={[ dayGridPlugin ]} header={{ left: 'prev,next', center: 'title', right: '' }} />
                </div>

            </div>

            <div className="bookingDetailsWrap d-flex justify-content-between">

                <div className="partiallyBooked">
                    <div className="titleWrap">
                        <h3>Partially Booked</h3>
                        <div className="form-group">
                            <Select
                                placeholder="Vehicle Model"
                            >
                                <Option value=""></Option>
                            </Select>
                        </div>
                    </div>
                    
                    <PartiallyItem
                        imageUrl="https://auto.ndtvimg.com/car-images/medium/mercedes-benz/cls/mercedes-benz-cls.jpg"
                        name="Mercedes-Benz CLS"
                    />
                    
                </div>

                <div className="reservedToday">
                    <div className="titleWrap">
                        <h3>Reserved Today</h3>
                        <div className="form-group">
                            <Select
                                placeholder="Vehicle Model"
                            >
                                <Option value=""></Option>
                            </Select>
                        </div>
                    </div>

                    <PartiallyItem
                        imageUrl="https://auto.ndtvimg.com/car-images/medium/mercedes-benz/cls/mercedes-benz-cls.jpg"
                        name="Mercedes-Benz CLS"
                    />

                </div>

            </div>
        </div>
    )
};

const mapStateToProps = createStructuredSelector({
    allVehicles : selectAllVehicles,
    types : selectTypes,
    models : selectModels
});

export default connect(mapStateToProps)(AvailabilityCalender);