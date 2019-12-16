import React from 'react';
import { Select } from 'antd';

import AvaliableVehicleItem from '../../components/avaliable-vehicle-item/avaliable-vehicle-item.component';
import PartiallyItem from '../../components/partially-item/partially-item.component';

import './availability-calender.styles.scss';

const { Option } = Select;

const AvailabilityCalender = () => {
    return(
        <div className="availabilityCalenderWrap d-flex flex-wrap">
            <div className="availabilityDetails">
                <h1>Availability Calender</h1>
                <div className="availabileVehiclesWrap">
                    <div className="filter d-flex justify-content-between align-items-center">
                        <h3>Avaliable Vehicles</h3>
                        <div className="filters">

                            <div className="form-group">
                                <Select
                                    placeholder="Vehicle Type"
                                >
                                    <Option value=""></Option>
                                </Select>
                            </div>

                            <div className="form-group">
                                <Select
                                    placeholder="Vehicle Model"
                                >
                                    <Option value=""></Option>
                                </Select>
                            </div>

                        </div>
                    </div>

                    <div className="vehicles">

                        <AvaliableVehicleItem 
                            imageUrl="https://auto.ndtvimg.com/car-images/medium/mercedes-benz/cls/mercedes-benz-cls.jpg"
                            name="Mercedes-Benz CLS"
                            count="7"
                            yardName="Kirulapana"
                        />
                        <AvaliableVehicleItem 
                            imageUrl="https://auto.ndtvimg.com/car-images/medium/mercedes-benz/cls/mercedes-benz-cls.jpg"
                            name="Mercedes-Benz CLS"
                            count="7"
                            yardName="Kirulapana"
                        />
                        <AvaliableVehicleItem 
                            imageUrl="https://auto.ndtvimg.com/car-images/medium/mercedes-benz/cls/mercedes-benz-cls.jpg"
                            name="Mercedes-Benz CLS"
                            count="7"
                            yardName="Kirulapana"
                        />
                        <AvaliableVehicleItem 
                            imageUrl="https://auto.ndtvimg.com/car-images/medium/mercedes-benz/cls/mercedes-benz-cls.jpg"
                            name="Mercedes-Benz CLS"
                            count="7"
                            yardName="Kirulapana"
                        />
                        <AvaliableVehicleItem 
                            imageUrl="https://auto.ndtvimg.com/car-images/medium/mercedes-benz/cls/mercedes-benz-cls.jpg"
                            name="Mercedes-Benz CLS"
                            count="7"
                            yardName="Kirulapana"
                        />
                        <AvaliableVehicleItem 
                            imageUrl="https://auto.ndtvimg.com/car-images/medium/mercedes-benz/cls/mercedes-benz-cls.jpg"
                            name="Mercedes-Benz CLS"
                            count="7"
                            yardName="Kirulapana"
                        />
                        <AvaliableVehicleItem 
                            imageUrl="https://auto.ndtvimg.com/car-images/medium/mercedes-benz/cls/mercedes-benz-cls.jpg"
                            name="Mercedes-Benz CLS"
                            count="7"
                            yardName="Kirulapana"
                        />
                        <AvaliableVehicleItem 
                            imageUrl="https://auto.ndtvimg.com/car-images/medium/mercedes-benz/cls/mercedes-benz-cls.jpg"
                            name="Mercedes-Benz CLS"
                            count="7"
                            yardName="Kirulapana"
                        />
                        <AvaliableVehicleItem 
                            imageUrl="https://auto.ndtvimg.com/car-images/medium/mercedes-benz/cls/mercedes-benz-cls.jpg"
                            name="Mercedes-Benz CLS"
                            count="7"
                            yardName="Kirulapana"
                        />
                        <AvaliableVehicleItem 
                            imageUrl="https://auto.ndtvimg.com/car-images/medium/mercedes-benz/cls/mercedes-benz-cls.jpg"
                            name="Mercedes-Benz CLS"
                            count="7"
                            yardName="Kirulapana"
                        />
                        <AvaliableVehicleItem 
                            imageUrl="https://auto.ndtvimg.com/car-images/medium/mercedes-benz/cls/mercedes-benz-cls.jpg"
                            name="Mercedes-Benz CLS"
                            count="7"
                            yardName="Kirulapana"
                        />
                        <AvaliableVehicleItem 
                            imageUrl="https://auto.ndtvimg.com/car-images/medium/mercedes-benz/cls/mercedes-benz-cls.jpg"
                            name="Mercedes-Benz CLS"
                            count="7"
                            yardName="Kirulapana"
                        />

                    </div>

                </div>
            </div>

            <div className="avalabilityCalender">
                <div className="date">Friday 6<sup>th</sup> of December</div>
                <div className="booking">
                    There are <span className="bookingCount">7 Booking</span> for the Day
                </div>
                <div className="calenderWrap"></div>
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

export default AvailabilityCalender;