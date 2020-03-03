import React from 'react';
import { Link } from 'react-router-dom';
import { Input , Select , AutoComplete } from 'antd';
import Icon from '@ant-design/icons';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import moment from 'moment';

import { selectAllVehicles , selectTypes , selectColors , selectModels } from '../../redux/vehicles/vehicles.selectors';
import { selectToggleAdvancedFeatures } from '../../redux/common/common.selectors';

import WizardActionBar from '../../components/wizard-action-bar/wizard-action-bar.component';
import VehicleItem from '../../components/vehicle-item/vehicle-item.component';
import DateRangePicker from '../../components/date-range-picker/date-range-picker.component';
import TimeRangePickerCom from '../../components/time-range-picker/time-range-picker.component';
import AdvancedFeatures from '../../components/advanced-features/advanced-features.component';

import SelfDriveInactive from '../../assets/images/self-drive-inactive.png';
import WithDriveInactive from '../../assets/images/with-driver-inactive.png';
import Wedding from '../../assets/images/wedding.png';
import Airport from '../../assets/images/airport.png';
import Regulart from '../../assets/images/regular.png';

import './home.styles.scss';

const locationSVG = () => (
    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="map-marker-alt" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="currentColor" d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"></path></svg>
);
const LocationIcon = props => <Icon component={locationSVG} {...props} />;
const { Option } = Select;
const { Search } = Input;

class Home extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            selectType : null,
            selectColor : null,
            selectModel : null,
            selectPrice : null,
            pickupLocation : 'Bandaranayake International Airport',
            dropoffLocation : '',
        }
    }

    dateRangeChange = (date, dateString) => {
        console.log('dateString' , dateString);
    }

    timeRangeChange = (time, timeString) => {
        console.log('timeString' , timeString);
    }

    changePickUpLocation = (data) => {
        console.log('data' , data);
    }

    changeDropOffLocation = (data) => {
        console.log('data' , data);
    }

    render(){

        const { allVehicles , types , colors , models , toggleAdvancedFeatures } = this.props;
        const { selectType , selectColor , selectModel , pickupLocation , dropoffLocation } = this.state;

        const locations = [
            { value: 'Colombo' },
            { value: 'Bandaranayake International Airport' },
            { value: 'Katunayaka Head Office' },
            { value: 'Kirulapana Head Office' }
        ];

        return(
            <div className="homeFrontWrap">
                <WizardActionBar reservationID="124524asdwdx" />
                {
                    (toggleAdvancedFeatures) ?
                    <AdvancedFeatures />
                    : ''
                }
                
                <div className="bookingContainer">

                    <div className="reservationType">
                        <div className="type">
                            <h3>Reservation Type</h3>

                            <div className="custom-control custom-radio">
                                <input 
                                    type="radio" 
                                    id="selfDrive" 
                                    name="driveType" 
                                    className="custom-control-input" 
                                    value="Self Drive"
                                />
                                <label className="custom-control-label selfDrive" htmlFor="selfDrive" >
                                    <span style={{ backgroundImage : `url(${SelfDriveInactive})`}} />
                                    SELF DRIVE
                                </label>
                            </div>
                            <div className="custom-control custom-radio">
                                <input 
                                    type="radio" 
                                    id="withDrive" 
                                    name="driveType" 
                                    className="custom-control-input" 
                                    value="With Driver"
                                />
                                <label className="custom-control-label withDrive" htmlFor="withDrive" >
                                    <span style={{ backgroundImage : `url(${WithDriveInactive})` }} />
                                    WITH DRIVER
                                </label>
                            </div>

                            <div className="typeRadio custom-control custom-radio">
                                <input 
                                    type="radio" 
                                    id="wedding" 
                                    name="reservationType" 
                                    className="custom-control-input" 
                                    value="Wedding Hire"
                                />
                                <label className="custom-control-label wedding" htmlFor="wedding" style={{ backgroundImage : `url(${Wedding})` }}>
                                    Wedding Hire
                                </label>
                            </div>

                            <div className="typeRadio custom-control custom-radio">
                                <input 
                                    type="radio" 
                                    id="airport" 
                                    name="reservationType" 
                                    className="custom-control-input" 
                                    value="Airport Drop/Pickup"
                                />
                                <label className="custom-control-label airport" htmlFor="airport" style={{ backgroundImage : `url(${Airport})` }}>
                                    Airport Drop/Pickup
                                </label>
                            </div>

                            <div className="typeRadio custom-control custom-radio">
                                <input 
                                    type="radio" 
                                    id="regular" 
                                    name="reservationType" 
                                    className="custom-control-input" 
                                    value="Regular Bookings"
                                />
                                <label className="custom-control-label regular" htmlFor="regular" style={{ backgroundImage : `url(${Regulart})` }}>
                                    Regular Bookings
                                </label>
                            </div>

                        </div>
                        <Link className="btn availibityBtn" to="/availability-calender">View Availibility Calender</Link>
                    </div>

                    <div className="bookingSecWrap d-flex flex-wrap">

                        <div className="bookingForm">
                            
                            <h3>Booking Details</h3>

                            <div className="bookingDetailsWrap">

                                <DateRangePicker 
                                    labelTitle="Pickup / Drop Off Date"
                                    onChange={this.dateRangeChange}
                                    startDate={moment().format('YYYY-MM-DD')}
                                    endDate={moment().format('YYYY-MM-DD')}
                                />
                                
                                <TimeRangePickerCom
                                    labelTitle="Pickup / Drop Off Time"
                                    onChange={this.timeRangeChange}
                                    startTime={moment().format('HH:MM A')}
                                    endTime={moment().format('HH:MM A')}
                                />
                                
                                <div className="form-group">
                                    <label>Pickup Location</label>
                                    <AutoComplete
                                        placeholder="Start typing here"
                                        onChange={ (value) => this.changePickUpLocation(value) }
                                        value={pickupLocation}
                                        locations={locations}
                                        filterOption={(inputValue, option) =>
                                            option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
                                        }
                                        className="location"
                                    >
                                        <Input suffix={<LocationIcon />} />
                                    </AutoComplete>
                                </div>

                                <div className="form-group">
                                    <label>Drop Off Location</label>
                                    <AutoComplete
                                        placeholder="Start typing here"
                                        onChange={ (value) => this.changeDropOffLocation(value) }
                                        value={dropoffLocation}
                                        locations={locations}
                                        filterOption={(inputValue, option) =>
                                            option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
                                        }
                                        className="location"
                                    >
                                        <Input suffix={<LocationIcon />} />
                                    </AutoComplete>
                                </div>

                            </div>

                            <div className="passengerWrap">

                                <div className="d-flex flex-wrap row">

                                    <div className="form-group col-md-4 col-12">
                                        <label>Number of Adults</label>
                                        <Select
                                            defaultValue="2"
                                        >
                                            <Option value="1">1 Person</Option>
                                            <Option value="2">2 Person</Option>
                                            <Option value="3">3 Person</Option>
                                            <Option value="4">4 Person</Option>
                                            <Option value="5">5 Person</Option>
                                            <Option value="6">6 Person</Option>
                                        </Select>
                                    </div>

                                    <div className="form-group col-md-4 col-12">
                                        <label>Number of Kids</label>
                                        <Select
                                            defaultValue="2"
                                        >
                                            <Option value="">None</Option>
                                            <Option value="1">1 Kids</Option>
                                            <Option value="2">2 Kids</Option>
                                            <Option value="3">3 Kids</Option>
                                            <Option value="4">4 Kids</Option>
                                            <Option value="5">5 Kids</Option>
                                            <Option value="6">6 Kids</Option>
                                        </Select>
                                    </div>

                                    <div className="form-group col-md-4 col-12">
                                        <label>Number of Toddlers</label>
                                        <Select
                                            defaultValue="2"
                                        >
                                            <Option value="">None</Option>
                                            <Option value="1">1 Toddlers</Option>
                                            <Option value="2">2 Toddlers</Option>
                                            <Option value="3">3 Toddlers</Option>
                                            <Option value="4">4 Toddlers</Option>
                                            <Option value="5">5 Toddlers</Option>
                                            <Option value="6">6 Toddlers</Option>
                                        </Select>
                                    </div>

                                    <div className="form-group col-md-4 col-12">
                                        <label>Number of Laguage</label>
                                        <Select
                                            defaultValue="4"
                                        >
                                            <Option value="">None</Option>
                                            <Option value="1">1 Bags</Option>
                                            <Option value="2">2 Bags</Option>
                                            <Option value="3">3 Bags</Option>
                                            <Option value="4">4 Bags</Option>
                                            <Option value="5">5 Bags</Option>
                                            <Option value="6">6 Bags</Option>
                                        </Select>
                                    </div>

                                </div>
                            </div>

                            <h3>Personal Details</h3>

                            <div className="form-group">
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text">Find Existing Client</span>
                                    </div>
                                    <AutoComplete
                                        placeholder="Start typing here"
                                    />
                                </div>
                            </div>

                            <span className="btn addNewBtn">Or Add new Client</span>


                        </div>

                        <div className="recomondations">
                            <h3>System Recommendations</h3>
                            <div className="vehicleList">

                                {
                                    (allVehicles) ?
                                    allVehicles
                                    .filter( (item , idx) => idx < 5 )
                                    .map( 
                                        vehicle => 
                                        <VehicleItem
                                            key={vehicle.name}
                                            imageUrl={vehicle.pic}
                                            name={vehicle.name}
                                            numberPlate=""
                                            yard=""
                                            ID={vehicle.name.toLowerCase().replace(/ /g,"-")}
                                            type="checkbox"
                                        />
                                    )
                                    : ''
                                }

                            </div>
                        </div>

                        <div className="filters">
                            <Search
                                placeholder="Search for vehicle"
                                onSearch={value => console.log(value)}
                            />
                            <div className="filtersWrap">
                                <div className="d-flex flex-wrap row">

                                    <div className="form-group col-md-6 col-12">
                                        <Select
                                            placeholder="Vehicle Type"
                                            onChange={ value => this.setState({ selectType : value }) }
                                        >
                                            <Option value="">Vehicle Type</Option>
                                            {
                                                (types && types.length > 0) ?
                                                types.map( type => <Option key={type} value={type}>{type}</Option> )
                                                : ''
                                            }
                                        </Select>
                                    </div>

                                    <div className="form-group col-md-6 col-12">
                                        <Select
                                            placeholder="Vehicle Model"
                                            onChange={ value => this.setState({ selectModel : value }) }
                                        >
                                            <Option value="">Vehicle Model</Option>
                                            {
                                                (models && models.length > 0) ?
                                                models.map( model => <Option key={model} value={model}>{model}</Option> )
                                                : ''
                                            }
                                        </Select>
                                    </div>

                                    <div className="form-group col-md-6 col-12">
                                        <Select
                                            placeholder="Price Range"
                                            onChange={ value => this.setState({ selectPrice : value }) }
                                        >
                                            <Option value="">Price Range</Option>
                                        </Select>
                                    </div>

                                    <div className="form-group col-md-6 col-12">
                                        <Select
                                            placeholder="Colors"
                                            onChange={ value => this.setState({ selectColor : value }) }
                                        >
                                            <Option value="">Colors</Option>
                                            {
                                                (colors && colors.length > 0) ?
                                                colors.map( color => <Option key={color} value={color}>{color}</Option> )
                                                : ''
                                            }
                                        </Select>
                                    </div>
                                    
                                </div>

                                <div className="vehiclesList">

                                    {
                                        (allVehicles) ?
                                        allVehicles
                                        .filter( vehicle => (selectType) ? vehicle.vehicle_type.toLowerCase() === selectType.toLowerCase() : vehicle.vehicle_type.toLowerCase() )
                                        .filter( vehicle => (selectModel) ? vehicle.vehicle_model.toLowerCase() === selectModel.toLowerCase() : vehicle.vehicle_model.toLowerCase() )
                                        .filter( vehicle => (selectColor) ? vehicle.color.indexOf(selectColor) >= 0 : vehicle.color )
                                        .map( 
                                            vehicle => 
                                            <VehicleItem
                                                key={vehicle.name}
                                                imageUrl={vehicle.pic}
                                                name={vehicle.name}
                                                numberPlate=""
                                                yard=""
                                                ID={vehicle.name.toLowerCase().replace(/ /g,"-")}
                                                type="checkbox"
                                            />
                                        )
                                        : ''
                                    }

                                </div>

                                <span className="btn submitBtn">Confirm and Proceed</span>

                            </div>
                        </div>

                    </div>

                </div>
            </div>
        )
    }
}

const mapStateToProps = createStructuredSelector({
    allVehicles : selectAllVehicles , 
    types : selectTypes,
    colors : selectColors,
    models : selectModels,
    toggleAdvancedFeatures : selectToggleAdvancedFeatures
});

export default connect(mapStateToProps)(Home);