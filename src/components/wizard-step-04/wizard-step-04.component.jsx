import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';
import { Select , Input , Switch } from 'antd';

import { 
    selectReservationType , 
    selectBookingType ,
    selectPickupLocation , 
    selectPickupDate , 
    selectPickupTime , 
    selectDropoffLocation , 
    selectDropoffDate , 
    selectDropoffTime , 
    selectCustomerName , 
    selectAdults , 
    selectKids , 
    selectToddlers , 
    selectLaguage 
} from '../../redux/wizard/wizard.selectors';
import { setActiveStep , setDoneSteps } from '../../redux/wizard/wizard.actions';

import './wizard-step-04.styles.scss';

const { Option } = Select;
const { TextArea } = Input;

class WizardStepFour extends React.Component {

    constructor(){
        super();
        this.state = {
            newAddon : [],
        }
    }

    handleConfirm = () => {
        const { history , setActiveStep , setDoneSteps } = this.props;
        history.push('/wizard/reservation-confirmation');
        setActiveStep(5);
        setDoneSteps(5);
    }

    handleNewAddon = () => {

        const { newAddon } = this.state;
        const addonArr = [
            {
                name : 'Additinal Car Seat',
                info : '300 LKR Per Unit'
            },
            {
                name : 'Mini Fridge',
                info : '1500 LKR Per Unit'
            }
        ]

        const addOnElem = <div className="addonItem d-flex justify-content-between">
            <div className="item">
                <Select
                    placeholder="Select Addon"
                >
                    {
                        addonArr.map( addon => <Option key={addon.name} value={addon.name}>{addon.name}</Option> )
                    }
                </Select>
            </div>
            <div className="quantity">
                <span className="info">300 LKR Per Unit</span>
                <Select
                    placeholder=""
                >
                    <Option value="1">1</Option>
                    <Option value="2">2</Option>
                    <Option value="3">3</Option>
                    <Option value="4">4</Option>
                    <Option value="5">5</Option>
                </Select>
            </div>
        </div>

        this.setState({ newAddon : [ ...newAddon , addOnElem ] });

    }

    render(){

        const { 
            reservationType , 
            bookingType , 
            pickupLocation , 
            pickupDate , 
            pickupTime , 
            dropoffLocation , 
            dropoffDate , 
            dropoffTime , 
            customerName , 
            adults , 
            kids , 
            toddlers , 
            laguage
        } = this.props;

        const { newAddon } = this.state;

        return(
            <div className="wizardContent wizardStep4 d-flex flex-wrap">
                <div className="vehicleDetails">
                    <h3 className="vehicleName">BMW X5 White</h3>
                    <div className="date">On 2<sup>nd</sup> December</div>
                    <div className="vehicleImage">
                        <img src="https://img.sm360.ca/ir/w640h390c/images/newcar/ca/2019/bmw/x5/xdrive-40i/suv/exteriorColors/2019_bmw_x5_xdrive40i_032_mwm.png" alt="BMW X5 White"/>
                    </div>
                    <div className="basePrice">
                        Base Price
                        <span className="price">6000 LKR</span>
                    </div>
                    <div className="yard">YARD : Polhengoda</div>
                    <div className="summeryWrap">
                        <div className="d-flex flex-wrap row">
                            {
                                (reservationType)?
                                <div className="summeryItem col-md-6 col-12">
                                    <span className="label">Reservation Type</span>
                                    <span className="value">{reservationType}</span>
                                </div>
                                : ''
                            }
                            
                            {
                                (bookingType)?
                                <div className="summeryItem col-md-6 col-12">
                                    <span className="label">Booking Type</span>
                                    <span className="value">{bookingType}</span>
                                </div>
                                : ''
                            }
                        </div>

                        {
                            (customerName)?
                            <div className="summeryItem">
                                <span className="label">Client Name</span>
                                <span className="value">{customerName}</span>
                                <span className="previous">34 Previous Reservation</span>
                            </div>
                            : ''
                        } 

                        {
                            (adults || kids || toddlers)?
                            <div className="summeryItem">
                                <span className="label">Passengers</span>
                                <span className="value">
                                    {
                                        (adults)?
                                        <span style={{ marginRight : '10px' }}>{adults} Adults</span>
                                        : ''
                                    } 
                                    {
                                        (kids)?
                                        <span style={{ margin : '0px 15px' }}>{kids} Kids</span>
                                        : ''
                                    }
                                    {
                                        (toddlers)?
                                        <span style={{ marginLeft : '10px' }}>{toddlers} Toddlers</span>
                                        : ''
                                    }
                                </span>
                            </div>
                            : ''
                        }

                        {
                            (laguage)?
                            <div className="summeryItem">
                                <span className="label">Laguage Details</span>
                                <span className="value">{laguage} Travaling Bags</span>
                            </div>
                            : ''
                        }
                    </div>
                </div>
                <div className="tripDetails">
                    <h3>Trip Details</h3>
                    <table className="tripTable">
                        <tbody>
                            <tr>
                                <th>Pick Up</th>
                                <td>
                                    <span>Location</span>
                                    {pickupLocation}
                                </td>
                                <td>
                                    <span>Date</span>
                                    {pickupDate}
                                </td>
                                <td>
                                    <span>Time</span>
                                    {pickupTime}
                                </td>
                            </tr>
                            <tr>
                                <th>Drop Off</th>
                                <td>
                                    <span>Location</span>
                                    {dropoffLocation}
                                </td>
                                <td>
                                    <span>Date</span>
                                    {dropoffDate}
                                </td>
                                <td>
                                    <span>Time</span>
                                    {dropoffTime}
                                </td>
                            </tr>
                        </tbody>
                    </table>

                    <div className="tripOtherDetail d-flex flex-wrap row">

                        <div className="otherDetail col-md-4 col-12">
                            <span>Total Trip Distance</span>
                            300 km
                        </div>

                        <div className="otherDetail col-md-4 col-12">
                            <span>Total Trip Time</span>
                            3 Days
                        </div>

                        <div className="otherDetail col-md-4 col-12">
                            <span>Excessive Mile Fee</span>
                            600 LKR per Mile
                        </div>

                    </div>

                    <h3 className="d-flex justify-content-between align-items-center">
                        Add ons
                        <span 
                            className="addNewAddon"
                            onClick={ () => this.handleNewAddon() }
                        >+ Add New Item</span>
                    </h3>

                    <div className="addOnList">
                        {
                            (newAddon)?
                            newAddon.map( addon => addon )
                            : ''
                        }
                    </div>

                    <h3>Payment Details</h3>

                    <Select
                        placeholder="Payment Type"
                        className="paymentType"
                    >
                        <Option value="1">1</Option>
                        <Option value="2">2</Option>
                        <Option value="3">3</Option>
                        <Option value="4">4</Option>
                        <Option value="5">5</Option>
                        <Option value="6">6</Option>
                    </Select>

                </div>
                <div className="paymentWrap">
                    <div className="discounts">
                        <h3>Discounts</h3>

                        <div className="discountItem d-flex">
                            <div className="discount">
                                <label htmlFor="">Special Discount</label>
                                <Input 
                                    suffix="%" 
                                />
                            </div>
                            <div className="remarkWrap">
                                <TextArea
                                    placeholder="* As instructed by Mr. Milindu"
                                />
                            </div>
                        </div>

                        <div className="discountItem d-flex">
                            <div className="discount">
                                <label htmlFor="">Base rate Discount</label>
                                <Input 
                                    suffix="%" 
                                />
                            </div>
                            <div className="remarkWrap">
                                <TextArea
                                    placeholder="* Remark"
                                />
                            </div>
                        </div>

                        <div className="discountItem d-flex">
                            <div className="discount">
                                <label htmlFor="">Mileage Discounts</label>
                                <div className="d-flex flex-wrap row">
                                    <div className="col-md-6 col-12">
                                        <Input 
                                            suffix="%" 
                                        />
                                        <span>On Mileage</span>
                                    </div>
                                    <div className="col-md-6 col-12">
                                        <Input 
                                            suffix="%" 
                                        />
                                        <span>On Excess</span>
                                    </div>
                                </div>
                            </div>
                            <div className="remarkWrap">
                                <TextArea
                                    placeholder="* Remark"
                                />
                            </div>
                        </div>

                        <div className="toggleBtns">

                            <div className="item">
                                Seasonal Surcharge from CRM
                                <Switch/>
                            </div>

                        </div>

                    </div>
                    <div className="paymentTotalWrap">
                        <div className="paymentDetails">

                            <div className="item baseTotal d-flex justify-content-between">
                                <span className="name">Base Total</span>
                                <span className="value">20,000 LKR</span>
                            </div>

                            <div className="item vat d-flex justify-content-between">
                                <span className="name">VAT(8%)</span>
                                <span className="value">1900.00 LKR</span>
                            </div>

                            <h4>Add ons</h4>

                            <div className="item addon d-flex justify-content-between">
                                <span className="name">Additinal Car Seat</span>
                                <span className="value">600.00 LKR</span>
                            </div>

                            <div className="item addon d-flex justify-content-between">
                                <span className="name">Mini Fridge</span>
                                <span className="value">1500.00 LKR</span>
                            </div>

                            <div className="item driver d-flex justify-content-between">
                                <span className="name">Drivers Accommodations and Meals</span>
                                <span className="value">500.00 LKR</span>
                            </div>

                            <div className="subTotal">
                                Sub Total
                                <span className="price">24,500 LKR</span>
                            </div>

                            <h4>Discounts</h4>

                            <div className="item d-flex justify-content-between">
                                <span className="name">Special Discount (20%)</span>
                                <span className="value">-6500.00 LKR</span>
                            </div>

                            <div className="item d-flex justify-content-between">
                                <span className="name">Millage Discount</span>
                                <span className="value">-1500.00 LKR</span>
                            </div>

                        </div>
                        <div className="totalWrap">
                            Total
                            <span className="total">16,500 LKR</span>
                        </div>
                    </div>
                    <div className="submitWrap">
                        <span 
                            className="btn submitBtn"
                            onClick={ () => this.handleConfirm() }
                        >Confirm Booking</span>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = createStructuredSelector({
    reservationType : selectReservationType,
    bookingType : selectBookingType,
    pickupLocation : selectPickupLocation,
    pickupDate : selectPickupDate,
    pickupTime : selectPickupTime,
    dropoffLocation : selectDropoffLocation,
    dropoffDate : selectDropoffDate,
    dropoffTime : selectDropoffTime,
    customerName : selectCustomerName,
    adults : selectAdults,
    kids : selectKids,
    toddlers : selectToddlers,
    laguage : selectLaguage,
});

const mapDispatchToProps = dispatch => ({
    setActiveStep : (activeStep) => dispatch(setActiveStep(activeStep)),
    setDoneSteps : (doneSteps) => dispatch(setDoneSteps(doneSteps)),
});

export default withRouter(connect(mapStateToProps , mapDispatchToProps)(WizardStepFour));