import React from 'react';
import { Select } from 'antd';
import { Link } from 'react-router-dom';
import { DatePicker , Input } from 'antd';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectAllVehicles } from '../../redux/vehicles/vehicles.selectors';
import { selectListDates } from '../../redux/avalibility/avalibility.selectors';

import { setListDates } from '../../redux/avalibility/avalibility.actions';

import './availability-calender-list.styles.scss';
import '@fullcalendar/core/main.css';
import '@fullcalendar/daygrid/main.css';

// eslint-disable-next-line
const { Option } = Select;
const { RangePicker } = DatePicker;
const { Search } = Input;

const AvailabilityCalenderList = ({ setListDates , listDates }) => {

    const dateRangeChange = (date, dateString) => {
        var dates = getDates(new Date(dateString[0]), new Date(dateString[1]));
        setListDates(dates);
    }

    var getDates = function(startDate, endDate) {
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
    };

    const vehicleTypeChange = (value) => {
        console.log(`selected ${value}`);
    }

    const onVehicleSearch = (value) => {
        console.log(`search ${value}`);
    }

    return(
        <div className="availabilityCalenderWrap availabilityCalenderListWrap">
            <div className="actionBar">
                <div className="titleWrap">
                    <h1>Availability Calender</h1>
                    <div className="details">Showing results for</div>
                </div>
                <div className="otherActions">
                    <div className="dateWrap">
                        <RangePicker onChange={dateRangeChange} />
                    </div>
                    <div className="vehicleType">
                        <Select
                            showSearch
                            placeholder="Vehicle Type"
                            optionFilterProp="children"
                            onChange={vehicleTypeChange}
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
                            onSearch={value => onVehicleSearch(value)}
                        />
                    </div>
                    <div className="calenderDatesWrap">
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
                <div className="avalibilityDetailsWrap d-flex flex-wrap">
                    <div className="vehiclesWrap"></div>
                    <div className="avalibilityDetails"></div>
                </div>

            </div>
        </div>
    )
};

const mapStateToProps = createStructuredSelector({
    allVehicles : selectAllVehicles,
    listDates : selectListDates,
});

const mapDispatchToProps = dispatch => ({
    setListDates : (listDates) => dispatch(setListDates(listDates))
});

export default connect(mapStateToProps , mapDispatchToProps)(AvailabilityCalenderList);