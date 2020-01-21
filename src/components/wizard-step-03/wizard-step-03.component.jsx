import React from 'react';
import { Icon, Input, AutoComplete , Select } from 'antd';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { setActiveStep , setDoneSteps } from '../../redux/wizard/wizard.actions';

import { selectAllVehicles } from '../../redux/vehicles/vehicles.selectors';

import ReservationSummery from '../reservation-summery/reservation-summery.component';
import VehicleItem from '../vehicle-item/vehicle-item.component';

import './wizard-step-03.styles.scss';

const { Option } = Select;

const WizardStepThree = ({ history , setActiveStep , setDoneSteps , allVehicles }) => {

    const handleNextPage = () => {
        history.push('/wizard/payment-details');
        setActiveStep(4);
        setDoneSteps(4);
    }

    return(
        <div className="wizardContent wizardStep3 d-flex flex-wrap">
            <div className="recomondations">
                <h3>System Recommendations</h3>
                <div className="vehicleList">

                    {
                        (allVehicles) ?
                        allVehicles
                        .filter( (item , idx) => idx < 10 )
                        .map( 
                            vehicle => 
                            <VehicleItem
                                key={vehicle.name}
                                imageUrl={vehicle.pic}
                                name={vehicle.name}
                                numberPlate=""
                                yard=""
                                ID={vehicle.name.toLowerCase().replace(/ /g,"-")}
                            />
                        )
                        : ''
                    }

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
                                    <Option value="Cars">Cars</Option>
                                    <Option value="Van">Van</Option>
                                    <Option value="Bus">Bus</Option>
                                </Select>
                            </div>

                            <div className="form-group col-md-3 col-12">
                                <Select
                                    placeholder="Vehicle Model"
                                >
                                    <Option value="Hatchback">Hatchback</Option>
                                    <Option value="Sedan">Sedan</Option>
                                    <Option value="SUV">SUV</Option>
                                </Select>
                            </div>

                            <div className="form-group col-md-3 col-12">
                                <Select
                                    placeholder="Colors"
                                >
                                    <Option value="Red">Red</Option>
                                    <Option value="Green">Green</Option>
                                    <Option value="Black">Black</Option>
                                </Select>
                            </div>

                            <div className="form-group col-md-3 col-12">
                                <Select
                                    placeholder="Price Range"
                                >
                                    <Option value="100000-200000">100000-200000</Option>
                                    <Option value="200000-300000">200000-300000</Option>
                                    <Option value="400000-500000">400000-500000</Option>
                                </Select>
                            </div>

                        </div>
                    </div>

                    <div className="vehicleSearchList">

                    {
                        (allVehicles) ?
                        allVehicles
                        .map( 
                            vehicle => 
                            <VehicleItem
                                key={vehicle.name}
                                imageUrl={vehicle.pic}
                                name={vehicle.name}
                                numberPlate=""
                                yard=""
                                ID={vehicle.name.toLowerCase().replace(/ /g,"-")}
                            />
                        )
                        : ''
                    }

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

const mapDispatchToProps = dispatch => ({
    setActiveStep : (activeStep) => dispatch(setActiveStep(activeStep)),
    setDoneSteps : (doneSteps) => dispatch(setDoneSteps(doneSteps)),
});

const mapStateToProps = createStructuredSelector({
    allVehicles : selectAllVehicles
});

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(WizardStepThree));