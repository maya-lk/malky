import React from 'react';
import { Link } from 'react-router-dom';
import { Icon , Input , DatePicker , Select , TimePicker , AutoComplete } from 'antd';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectAllVehicles , selectTypes , selectColors , selectModels } from '../../redux/vehicles/vehicles.selectors';

import WizardActionBar from '../../components/wizard-action-bar/wizard-action-bar.component';
import VehicleItem from '../../components/vehicle-item/vehicle-item.component';

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
            selectPrice : null
        }
    }

    render(){

        const { allVehicles , types , colors , models } = this.props;
        const { selectType , selectColor , selectModel } = this.state;

        return(
            <div className="homeFrontWrap">
                <WizardActionBar reservationID="124524asdwdx" />
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

                            <div className="d-flex flex-wrap row">

                                <div className="tabWrap col-md-6 col-12">
                                    <ul className="nav nav-pills" id="pickupTab" role="tablist">
                                        <li className="nav-item">
                                            <span className="nav-link active" id="pickUp-tab" data-toggle="pill" href="#pickUp" role="tab" aria-controls="pickUp" aria-selected="true">Pick Up</span>
                                        </li>
                                    </ul>
                                    <div className="tab-content" id="pickupTabContent">
                                        <div className="tab-pane fade show active" id="pickUp" role="tabpanel" aria-labelledby="pickUp-tab">

                                            <div className="form-group">
                                                <label>Pickup Location</label>
                                                <Input
                                                    suffix={
                                                        <LocationIcon />
                                                    }
                                                    className="location"
                                                />
                                            </div>

                                            <div className="d-flex row">
                                                <div className="form-group col-md-7 col-12">
                                                    <label>Pickup Date</label>
                                                    <DatePicker 
                                                        placeholder="" 
                                                    />
                                                </div>
                                                <div className="form-group col-md-5 col-12">
                                                    <label>Pickup Time</label>
                                                    <TimePicker 
                                                        use12Hours 
                                                        format="h:mm A"
                                                        placeholder=""
                                                    />
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>

                                <div className="tabWrap col-md-6 col-12">
                                    <ul className="nav nav-pills" id="dropOffTab" role="tablist">
                                        <li className="nav-item">
                                            <span className="nav-link active" id="dropOff-tab" data-toggle="pill" href="#dropOff" role="tab" aria-controls="dropOff" aria-selected="true">Drop Off</span>
                                        </li>
                                    </ul>
                                    <div className="tab-content" id="dropOffTabContent">
                                        <div className="tab-pane fade show active" id="dropOff" role="tabpanel" aria-labelledby="dropOff-tab">

                                            <div className="form-group">
                                                <label>Drop Off Location</label>
                                                <Input
                                                    suffix={
                                                        <LocationIcon />
                                                    }
                                                    className="location"
                                                />
                                            </div>

                                            <div className="d-flex row">
                                                <div className="form-group col-md-7 col-12">
                                                    <label>Drop Off Date</label>
                                                    <DatePicker 
                                                        placeholder=""
                                                    />
                                                </div>
                                                <div className="form-group col-md-5 col-12">
                                                    <label>Drop Off Time</label>
                                                    <TimePicker 
                                                        use12Hours 
                                                        format="h:mm A"
                                                        placeholder=""
                                                    />
                                                </div>
                                            </div>

                                        </div>
                                    </div>
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
    models : selectModels
});

export default connect(mapStateToProps)(Home);