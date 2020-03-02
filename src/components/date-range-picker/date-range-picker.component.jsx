import React from 'react';
import { DatePicker } from 'antd';

const { RangePicker } = DatePicker;

const DateRangePicker = ({ labelTitle , onChange }) => {
    return (
        <div className="form-group">
            <label>{labelTitle}</label>
            <RangePicker onChange={onChange} />
        </div>
    )
};

export default DateRangePicker;