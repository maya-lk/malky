import React from 'react';
import { Icon, Input, AutoComplete , Select } from 'antd';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import { setActiveStep , setDoneSteps } from '../../redux/wizard/wizard.actions';

import ReservationSummery from '../reservation-summery/reservation-summery.component';
import VehicleItem from '../vehicle-item/vehicle-item.component';

import './wizard-step-03.styles.scss';

const { Option } = Select;

const WizardStepThree = ({ history , setActiveStep , setDoneSteps }) => {

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

                    <VehicleItem
                        imageUrl="https://auto.ndtvimg.com/car-images/medium/maruti-suzuki/baleno/maruti-suzuki-baleno.jpg"
                        name="Maruti Suzuki Baleno"
                        numberPlate="ABS - 10258"
                        yard="Polhengoda"
                        ID="125"
                    />

                    <VehicleItem
                        imageUrl="https://activerent.hr/content/uploads/2016/04/Golf-VIInew-675x390.jpg"
                        name="VW Golf VII Automatik"
                        numberPlate="ABS - 10258"
                        yard="Polhengoda"
                        ID="145"
                    />

                    <VehicleItem
                        imageUrl="https://auto.ndtvimg.com/car-images/medium/maruti-suzuki/baleno/maruti-suzuki-baleno.jpg"
                        name="Maruti Suzuki Baleno"
                        numberPlate="ABS - 10258"
                        yard="Polhengoda"
                        ID="526"
                    />

                    <VehicleItem
                        imageUrl="https://activerent.hr/content/uploads/2016/04/Golf-VIInew-675x390.jpg"
                        name="VW Golf VII Automatik"
                        numberPlate="ABS - 10258"
                        yard="Polhengoda"
                        ID="874"
                    />

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

                        <VehicleItem
                            imageUrl="https://auto.ndtvimg.com/car-images/medium/maruti-suzuki/baleno/maruti-suzuki-baleno.jpg"
                            name="Maruti Suzuki Baleno"
                            numberPlate="ABS - 10258"
                            yard="Polhengoda"
                            ID="125"
                        />

                        <VehicleItem
                            imageUrl="https://activerent.hr/content/uploads/2016/04/Golf-VIInew-675x390.jpg"
                            name="VW Golf VII Automatik"
                            numberPlate="ABS - 10258"
                            yard="Polhengoda"
                            ID="145"
                        />

                        <VehicleItem
                            imageUrl="https://auto.ndtvimg.com/car-images/medium/maruti-suzuki/baleno/maruti-suzuki-baleno.jpg"
                            name="Maruti Suzuki Baleno"
                            numberPlate="ABS - 10258"
                            yard="Polhengoda"
                            ID="526"
                        />

                        <VehicleItem
                            imageUrl="https://activerent.hr/content/uploads/2016/04/Golf-VIInew-675x390.jpg"
                            name="VW Golf VII Automatik"
                            numberPlate="ABS - 10258"
                            yard="Polhengoda"
                            ID="874"
                        />

                        <VehicleItem
                            imageUrl="https://activerent.hr/content/uploads/2016/04/Golf-VIInew-675x390.jpg"
                            name="VW Golf VII Automatik"
                            numberPlate="ABS - 10258"
                            yard="Polhengoda"
                            ID="548"
                        />

                        <VehicleItem
                            imageUrl="https://auto.ndtvimg.com/car-images/medium/maruti-suzuki/baleno/maruti-suzuki-baleno.jpg"
                            name="Maruti Suzuki Baleno"
                            numberPlate="ABS - 10258"
                            yard="Polhengoda"
                            ID="527"
                        />

                        <VehicleItem
                            imageUrl="https://activerent.hr/content/uploads/2016/04/Golf-VIInew-675x390.jpg"
                            name="VW Golf VII Automatik"
                            numberPlate="ABS - 10258"
                            yard="Polhengoda"
                            ID="889"
                        />

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

export default withRouter(connect(null,mapDispatchToProps)(WizardStepThree));