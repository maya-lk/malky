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
                        ID="1"
                    />

                    <VehicleItem
                        imageUrl="https://activerent.hr/content/uploads/2016/04/Golf-VIInew-675x390.jpg"
                        name="VW Golf VII Automatik"
                        numberPlate="ABS - 10258"
                        yard="Polhengoda"
                        ID="2"
                    />

                    <VehicleItem
                        imageUrl="https://www.freeiconspng.com/uploads/audi-png-transparent-png-12.png"
                        name="Audi A3"
                        numberPlate="ABS - 10258"
                        yard="Polhengoda"
                        ID="3"
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

                        <VehicleItem
                            imageUrl="https://auto.ndtvimg.com/car-images/medium/maruti-suzuki/baleno/maruti-suzuki-baleno.jpg"
                            name="Maruti Suzuki Baleno"
                            numberPlate="ABS - 10258"
                            yard="Polhengoda"
                            ID="4"
                        />

                        <VehicleItem
                            imageUrl="https://activerent.hr/content/uploads/2016/04/Golf-VIInew-675x390.jpg"
                            name="VW Golf VII Automatik"
                            numberPlate="ABS - 10258"
                            yard="Polhengoda"
                            ID="5"
                        />

                        <VehicleItem
                            imageUrl="https://www.freeiconspng.com/uploads/audi-png-transparent-png-12.png"
                            name="Audi A3"
                            numberPlate="ABS - 10258"
                            yard="Polhengoda"
                            ID="6"
                        />

                        <VehicleItem
                            imageUrl="https://di-uploads-pod4.dealerinspire.com/commonwealthhonda/uploads/2018/03/2018-Honda-HR-V.png"
                            name="CRV"
                            numberPlate="ABS - 10258"
                            yard="Polhengoda"
                            ID="7"
                        />

                        <VehicleItem
                            imageUrl="https://i.dlpng.com/static/png/423333_preview.png"
                            name="Mercedes-Benz C-Class"
                            numberPlate="ABS - 10258"
                            yard="Polhengoda"
                            ID="8"
                        />

                        <VehicleItem
                            imageUrl="https://www.fourjay.org/myphoto/f/79/799095_honda-civic-png.png"
                            name="Honda Civic"
                            numberPlate="ABS - 10258"
                            yard="Polhengoda"
                            ID="9"
                        />

                        <VehicleItem
                            imageUrl="https://www.drivefivestar.com/static/dealer-12376/716354.png"
                            name="Toyota Yaris"
                            numberPlate="ABS - 10258"
                            yard="Polhengoda"
                            ID="10"
                        />

                        <VehicleItem
                            imageUrl="https://www.astervender.mu/uploads/6790/6790_tlyTRgkw.jpg"
                            name="Toyota Vitz"
                            numberPlate="ABS - 10258"
                            yard="Polhengoda"
                            ID="11"
                        />

                        <VehicleItem
                            imageUrl="https://s1.paultan.org/image/2014/12/toyota-aqua-x-urban-0010.jpg"
                            name="Toyota Aqua"
                            numberPlate="ABS - 10258"
                            yard="Polhengoda"
                            ID="12"
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