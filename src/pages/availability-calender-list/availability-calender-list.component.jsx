import React from 'react';
import { Select } from 'antd';
import { Link } from 'react-router-dom';
import { DatePicker , Input } from 'antd';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectAllVehicles } from '../../redux/vehicles/vehicles.selectors';
import { selectListDates } from '../../redux/avalibility/avalibility.selectors';

import { setListDates } from '../../redux/avalibility/avalibility.actions';

import AvaliableListVehicleItem from '../../components/avaliable-list-vehicle-item/avaliable-list-vehicle-item.component';

import './availability-calender-list.styles.scss';
import '@fullcalendar/core/main.css';
import '@fullcalendar/daygrid/main.css';

// eslint-disable-next-line
const { Option } = Select;
const { RangePicker } = DatePicker;
const { Search } = Input;

const getDates = function(startDate, endDate) {
    var dates = [],
        currentDate = startDate,
        addDays = function(days) {
          var date = new Date(this.valueOf());
          date.setDate(date.getDate() + days);
          return date;
        };
    while (currentDate <= endDate) {
        dates.push(currentDate);
        currentDate = addDays.call(currentDate, 1);
    }
    return dates;
}

class AvailabilityCalenderList extends React.Component {

    ref = React.createRef();
    scrollDates = React.createRef();

    constructor(props){
        super(props)

        this.state = {
            calItemHeight : '',
            scrollLeftPosition : ''
        }
    }

    componentDidMount() {
        const { current } = this.ref;
        this.setState({ calItemHeight : current.offsetHeight });
    }

    dateRangeChange = (date, dateString) => {
        const { setListDates } = this.props;
        var dates = getDates(new Date(dateString[0]), new Date(dateString[1]));
        setListDates(dates);
    }

    vehicleTypeChange = (value) => {
        console.log(`selected ${value}`);
    }

    onVehicleSearch = (value) => {
        console.log(`search ${value}`);
    }

    render(){
        const { listDates , allVehicles } = this.props;
        const { calItemHeight , scrollLeftPosition } = this.state;

        return(
            <div className="availabilityCalenderWrap availabilityCalenderListWrap">
                <div className="actionBar">
                    <div className="titleWrap">
                        <h1>Availability Calender</h1>
                        <div className="details">Showing results for</div>
                    </div>
                    <div className="otherActions">
                        <div className="dateWrap">
                            <RangePicker onChange={this.dateRangeChange} />
                        </div>
                        <div className="vehicleType">
                            <Select
                                showSearch
                                placeholder="Vehicle Type"
                                optionFilterProp="children"
                                onChange={this.vehicleTypeChange}
                                filterOption={(input, option) =>
                                    option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                }
                            >
    
                            </Select>
                        </div>
                        <div className="btnsWrap">
                            <Link className="btn active" to="/availability-calender-list"><i className="fas fa-bars"></i></Link>
                            <Link className="btn" to="/availability-calender"><i className="fas fa-th-large"></i></Link>
                        </div>
                    </div>
                </div>
                <div className="availabilityDetails">
                    
                    <div className="searchNCalenderDateWrap d-flex flex-wrap">
                        <div className="searchWrap">
                            <Search
                                placeholder="Search vehicles"
                                onSearch={value => this.onVehicleSearch(value)}
                            />
                        </div>
                        <div
                            ref={this.scrollDates}
                            className="calenderDatesWrap"
                            onScroll={ () => this.setState({ scrollLeftPosition : this.scrollDates.current.scrollLeft }) }
                        >
                            <div className="calenderDatesInside" style={{ width : `${ listDates ? listDates.length * 90 : '' }px` }}>
                                {
                                    (listDates) ?
                                    listDates.map( date => {
                                        const weekdays = ['Sun' , 'Mon' , 'Tue' , 'Wen' , 'Thu' , 'Fri' , 'Sat'];
                                        const listDate = date.getDate();
                                        const listDateName = date.getDay();
                                        return <div key={date} className="dateItem">
                                            <span className="date">{listDate}</span>
                                            <span className="weekDay">{weekdays[listDateName]}</span>
                                        </div>;
                                    })
                                    : ''
                                }
                            </div>
                        </div>
                    </div>
                    <div className="avalibilityDetailsWrap d-flex flex-wrap">
                        <div className="vehiclesWrap">
                            {
                                (allVehicles) ?
                                allVehicles
                                .map( 
                                    vehicle => 
                                    <AvaliableListVehicleItem
                                        refProp={this.ref}
                                        key={vehicle.name}
                                        imageUrl={vehicle.pic}
                                        name={vehicle.name}
                                        yardName="Kirulapana"
                                        vehiNo=""
                                        perDay=""
                                        totalFare=""
                                        heightEle={`${calItemHeight}px`}
                                    />
                                )
                                : ''
                            }
                        </div>
                        <div className="avalibilityDetails">
                            <div 
                                className="avalibilityDetailsInside" 
                                style={{ 
                                    width : `${ listDates ? listDates.length * 90 : '' }px`,
                                    transform : `translateX(-${scrollLeftPosition}px)`
                                }}
                            >
                                {
                                    (allVehicles) ?
                                    allVehicles
                                    .map( 
                                        vehicle => 
                                        <div
                                            key={vehicle.name} 
                                            className="availibilityCalTr"
                                            style={{ height : `${calItemHeight}px` }}
                                        >
                                            {
                                                (listDates) ?
                                                listDates.map( date => {
                                                    return <div key={date} className="availibityCalTd"></div>;
                                                })
                                                : ''
                                            }
                                        </div>
                                    )
                                    : ''
                                }
                            </div>
                        </div>
                    </div>
    
                </div>
            </div>
        )
    }
}

const mapStateToProps = createStructuredSelector({
    allVehicles : selectAllVehicles,
    listDates : selectListDates,
});

const mapDispatchToProps = dispatch => ({
    setListDates : (listDates) => dispatch(setListDates(listDates))
});

export default connect(mapStateToProps , mapDispatchToProps)(AvailabilityCalenderList);