import React from 'react';
import { Icon, Input, AutoComplete , Select } from 'antd';
import { withRouter } from 'react-router-dom';

import ReservationSummery from '../reservation-summery/reservation-summery.component';
import VehicleItem from '../vehicle-item/vehicle-item.component';

import './wizard-step-03.styles.scss';

const { Option } = Select;

const WizardStepThree = ({ history }) => {

    const handleNextPage = () => {
        history.push('/wizard/payment-details');
    }

    return(
        <div className="wizardContent wizardStep3 d-flex flex-wrap">
            <div className="recomondations">
                <h3>System Recommendations</h3>
                <div className="vehicleList">
                    <VehicleItem/>
                </div>
            </div>
            <div className="searchVehicle">
                <h3>Search for Vehicle</h3>
                <div className="searchVehicleWrap">
                    <AutoComplete
                        className="searchVehicleInput"
                        placeholder="Enter vehicle name or plate number"
                    >
                        <Input suffix={<Icon type="search" />} />
                    </AutoComplete>

                    <div className="advancedFilters">
                        <h4>Advance Filters</h4>
                        <div className="d-flex flex-wrap">
                            
                            <div className="form-group col-md-3 col-12">
                                <Select
                                    placeholder="Vehicle Type"
                                >
                                    <Option value=""></Option>
                                </Select>
                            </div>

                            <div className="form-group col-md-3 col-12">
                                <Select
                                    placeholder="Vehicle Model"
                                >
                                    <Option value=""></Option>
                                </Select>
                            </div>

                            <div className="form-group col-md-3 col-12">
                                <Select
                                    placeholder="Colors"
                                >
                                    <Option value=""></Option>
                                </Select>
                            </div>

                            <div className="form-group col-md-3 col-12">
                                <Select
                                    placeholder="Price Range"
                                >
                                    <Option value=""></Option>
                                </Select>
                            </div>

                        </div>
                    </div>

                    <div className="vehicleSearchList">
                        <VehicleItem/>
                        <VehicleItem/>
                        <VehicleItem/>
                        <VehicleItem/>
                        <VehicleItem/>
                        <VehicleItem/>
                        <VehicleItem/>
                    </div>

                    <span className="btn submitBtn" onClick={() => handleNextPage()}>Confirm and Proceed</span>

                </div>
            </div>
            <div className="reservationSummery">       
                <h3>Reservation Summery</h3>
                <ReservationSummery/>
            </div>
        </div>
    )
};

export default withRouter(WizardStepThree);