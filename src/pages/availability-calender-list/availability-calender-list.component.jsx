import React from 'react';
import { Select } from 'antd';
import { Link } from 'react-router-dom';
import { DatePicker , Input } from 'antd';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectAllVehicles , selectTypes } from '../../redux/vehicles/vehicles.selectors';
import { selectListDates } from '../../redux/avalibility/avalibility.selectors';

import { setListDates , setClickedVehicle } from '../../redux/avalibility/avalibility.actions';

import AvaliableListVehicleItem from '../../components/avaliable-list-vehicle-item/avaliable-list-vehicle-item.component';
import AvailibilityDetails from '../../components/availibility-details/availibility-details.component';

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
    availibilityCalRef = React.createRef();

    constructor(props){
        super(props)

        this.state = {
            calItemHeight : '',
            scrollLeftPosition : '',
            winWidth: 0,
            winHeight: 0,
            selectType : null,
            searchName : '',
            toggleDetailPop : false,
            selectedVehicle : null,
            clickedDate : ''
        }

        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
        
    }

    componentDidMount() {
        const { current } = this.ref;
        const { setListDates } = this.props;

        let currentDate = new Date();
        var date = new Date();
        let afterWeekDate = new Date(date.setDate(date.getDate() + 30));

        this.setState({ calItemHeight : current.offsetHeight });

        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);

        var loadingDates = getDates(currentDate, afterWeekDate);

        if( loadingDates.length > 0 ){
            var i;
            var listDatesObj = [];
            var item = {};
            for (i = 0; i < loadingDates.length; i++) {
                if( i === 5 ){
                    item = {
                        'date' : loadingDates[i],
                        'vehicles' : [
                            'Suzuki Alto - Premium - Manual',
                            'Perodua(Daihatsu) Axia '
                        ]
                    }
                }else if( i === 8 ){
                    item = {
                        'date' : loadingDates[i],
                        'vehicles' : [
                            'Suzuki Alto - K10 - Auto',
                            'Toyota Corolla NZE 141'
                        ]
                    }
                }else {
                    item = {
                        'date' : loadingDates[i],
                        'vehicles' : []
                    }
                }
                listDatesObj.push(item);
            } 
        }

        setListDates(listDatesObj);

    }

    componentWillUnmount(){
        window.removeEventListener('resize', this.updateWindowDimensions);
    }

    updateWindowDimensions() {
        this.setState({ winWidth: window.innerWidth, winHeight: window.innerHeight });
    }

    dateRangeChange = (date, dateString) => {
        const { setListDates } = this.props;
        var dates = getDates(new Date(dateString[0]), new Date(dateString[1]));

        if( dates.length > 0 ){
            var i;
            var listDatesObj = [];
            for (i = 0; i < dates.length; i++) {
                var item = {
                    'date' : dates[i],
                    'vehicles' : [
                        'Suzuki Alto - Premium - Manual',
                        'Perodua(Daihatsu) Axia '
                    ]
                }
                listDatesObj.push(item);
            } 
        }

        setListDates(listDatesObj);
    }

    clickedVehicle = () => {
        this.setState({ toggleDetailPop : true })
    }

    hidePopup = () => {
        this.setState({ toggleDetailPop : false })
    }

    render(){
        const { listDates , allVehicles , types , setClickedVehicle } = this.props;
        const { calItemHeight , scrollLeftPosition , winHeight , selectType , searchName , toggleDetailPop , clickedDate } = this.state;

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
                                onChange={ value => this.setState({ selectType : value }) }
                                filterOption={(input, option) =>
                                    option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                }
                            >
                                <Option value="">Vehicle Type</Option>
                                {
                                    (types && types.length > 0) ?
                                    types.map( type => <Option key={type} value={type}>{type}</Option> )
                                    : ''
                                }
                            </Select>
                        </div>
                        <div className="btnsWrap">
                            <Link className="btn active" to="/availability-calender-list"><i className="fas fa-bars"></i></Link>
                            <Link className="btn" to="/availability-calender"><i className="fas fa-th-large"></i></Link>
                        </div>
                    </div>
                </div>
                <div className="availabilityDetails" ref={this.availibilityCalRef}>
                    
                    <div className="searchNCalenderDateWrap d-flex flex-wrap">
                        <div className="searchWrap">
                            <Search
                                placeholder="Search vehicles"
                                onChange={e => this.setState({ searchName : e.target.value })}
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
                                    listDates.map( dateObj => {
                                        const weekdays = ['Sun' , 'Mon' , 'Tue' , 'Wen' , 'Thu' , 'Fri' , 'Sat'];
                                        const listDate = dateObj.date.getDate();
                                        const listDateName = dateObj.date.getDay();
                                        return <div key={dateObj.date} className="dateItem">
                                            <span className="date">{listDate}</span>
                                            <span className="weekDay">{weekdays[listDateName]}</span>
                                        </div>;
                                    })
                                    : ''
                                }
                            </div>
                        </div>
                    </div>
                    <div className="avalibilityDetailsWrap d-flex flex-wrap" style={{ height : `${winHeight - 265}px` }}>
                        <div className="vehiclesWrap">
                            {
                                (allVehicles) ?
                                allVehicles
                                .filter( vehicle => (selectType) ? vehicle.vehicle_type.toLowerCase() === selectType.toLowerCase() : vehicle.vehicle_type.toLowerCase() )
                                .filter( vehicle => vehicle.name.toLowerCase().search(searchName.toLowerCase()) !== -1 )
                                .map( 
                                    vehicle => 
                                    <AvaliableListVehicleItem
                                        refProp={this.ref}
                                        key={vehicle.name}
                                        imageUrl={vehicle.pic}
                                        name={vehicle.name}
                                        yardName="Kirulapana"
                                        vehiNo={vehicle.registration_no}
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
                                    .filter( vehicle => (selectType) ? vehicle.vehicle_type.toLowerCase() === selectType.toLowerCase() : vehicle.vehicle_type.toLowerCase() )
                                    .filter( vehicle => vehicle.name.toLowerCase().search(searchName.toLowerCase()) !== -1 )
                                    .map( 
                                        vehicle => 
                                        <div
                                            key={vehicle.name} 
                                            className="availibilityCalTr"
                                            style={{ height : `${calItemHeight}px` }}
                                        >
                                            {
                                                (listDates) ?
                                                listDates.map( dateobj => {
                                                    return <div 
                                                            key={dateobj.date} 
                                                            className="availibityCalTd"
                                                            >
                                                                {
                                                                    (dateobj.vehicles.indexOf(vehicle.name) !== -1) ?
                                                                    <div 
                                                                        className="availible"
                                                                        onClick={() => {
                                                                            setClickedVehicle(vehicle);
                                                                            this.clickedVehicle();
                                                                            this.setState({ clickedDate : dateobj.date });
                                                                        }}
                                                                    ></div>
                                                                    : ''
                                                                }
                                                            </div>;
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

                {
                    (toggleDetailPop) ?
                    <AvailibilityDetails 
                        hidePopup={this.hidePopup}
                        mainWrapRef={this.availibilityCalRef.current}
                        clickedDate={clickedDate}
                    />
                    : ''
                }

            </div>
        )
    }
}

const mapStateToProps = createStructuredSelector({
    allVehicles : selectAllVehicles,
    listDates : selectListDates,
    types : selectTypes
});

const mapDispatchToProps = dispatch => ({
    setListDates : (listDates) => dispatch(setListDates(listDates)),
    setClickedVehicle : (clickedVehicle) => dispatch(setClickedVehicle(clickedVehicle))
});

export default connect(mapStateToProps , mapDispatchToProps)(AvailabilityCalenderList);