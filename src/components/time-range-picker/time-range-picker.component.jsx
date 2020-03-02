import React from 'react';
import { TimePicker } from 'antd';

const { RangePicker } = TimePicker;

const TimeRangePickerCom = ({ labelTitle , onChange }) => {
    return (
        <div className="form-group">
            <label>{labelTitle}</label>
            <RangePicker 
                onChange={onChange}
                use12Hours
                format="h:mm A"
            />
        </div>
    )
};

export default TimeRangePickerCom;