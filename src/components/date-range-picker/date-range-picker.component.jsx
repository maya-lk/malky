import React from 'react';
import { DatePicker } from 'antd';
import moment from 'moment';

const { RangePicker } = DatePicker;

const DateRangePicker = ({ labelTitle , onChange , startDate='' , endDate='' }) => {
    return (
        <div className="form-group">
            <label>{labelTitle}</label>
            {
                ( startDate && endDate ) ?
                <RangePicker 
                    onChange={onChange} 
                    defaultValue={ [ moment(startDate, 'YYYY-MM-DD'), moment(endDate, 'YYYY-MM-DD')] }
                />
                : <RangePicker 
                    onChange={onChange} 
                />
            }
        </div>
    )
};

export default DateRangePicker;