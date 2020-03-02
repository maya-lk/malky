import React from 'react';
import { Input, AutoComplete , Select } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { setActiveStep , setDoneSteps } from '../../redux/wizard/wizard.actions';

import { selectAllVehicles , selectTypes , selectColors , selectModels } from '../../redux/vehicles/vehicles.selectors';

import ReservationSummery from '../reservation-summery/reservation-summery.component';
import VehicleItem from '../vehicle-item/vehicle-item.component';

import './wizard-step-03.styles.scss';

const { Option } = Select;

class WizardStepThree extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            selectType : null,
            selectColor : null,
            selectModel : null,
            selectPrice : null
        }
    }

    handleNextPage = () => {

        const { history , setActiveStep , setDoneSteps } = this.props;

        history.push('/wizard/payment-details');
        setActiveStep(4);
        setDoneSteps(4);
    }

    render(){

        const { allVehicles , types , colors , models } = this.props;
        const { selectType , selectColor , selectModel } = this.state;

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
                            <Input suffix={<SearchOutlined />} />
                        </AutoComplete>

                        <div className="advancedFilters">
                            <h4>Advance Filters</h4>
                            <div className="d-flex flex-wrap">
                                
                                <div className="form-group col-md-3 col-12">
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

                                <div className="form-group col-md-3 col-12">
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

                                <div className="form-group col-md-3 col-12">
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

                                <div className="form-group col-md-3 col-12">
                                    <Select
                                        placeholder="Price Range"
                                        onChange={ value => this.setState({ selectPrice : value }) }
                                    >
                                        <Option value="">Price Range</Option>
                                    </Select>
                                </div>

                            </div>
                        </div>

                        <div className="vehicleSearchList">

                        {
                            (allVehicles) ?
                            allVehicles
                            .filter( vehicle => (selectType) ? vehicle.vehicle_type.toLowerCase() === selectType.toLowerCase() : vehicle.vehicle_type.toLowerCase() )
                            .filter( vehicle => (selectModel) ? vehicle.vehicle_model.toLowerCase() === selectModel.toLowerCase() : vehicle.vehicle_model.toLowerCase() )
                            .filter( vehicle => (selectColor) ? vehicle.color.indexOf(selectColor) !== -1 : vehicle.color )
                            .map( 
                                vehicle => 
                                <VehicleItem
                                    key={vehicle.name}
                                    imageUrl={vehicle.pic}
                                    name={vehicle.name}
                                    numberPlate=""
                                    yard=""
                                    ID={`list${vehicle.name.toLowerCase().replace(/ /g,"-")}`}
                                />
                            )
                            : ''
                        }

                        </div>

                        <span className="btn submitBtn" onClick={() => this.handleNextPage()}>Confirm and Proceed</span>

                    </div>
                </div>
                <div className="reservationSummery">       
                    <h3>Reservation Summery</h3>
                    <ReservationSummery/>
                </div>
            </div> 
        )
    }
}

const mapDispatchToProps = dispatch => ({
    setActiveStep : (activeStep) => dispatch(setActiveStep(activeStep)),
    setDoneSteps : (doneSteps) => dispatch(setDoneSteps(doneSteps)),
});

const mapStateToProps = createStructuredSelector({
    allVehicles : selectAllVehicles,
    types : selectTypes,
    colors : selectColors,
    models : selectModels
});

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(WizardStepThree));