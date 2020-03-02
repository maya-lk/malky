import React from 'react';
import { TimePicker } from 'antd';
import moment from 'moment';

const { RangePicker } = TimePicker;

const TimeRangePickerCom = ({ labelTitle , onChange , startTime='' , endTime='' }) => {
    return (
        <div className="form-group">
            <label>{labelTitle}</label>
            {
                ( startTime && endTime ) ?
                <RangePicker 
                    onChange={onChange}
                    use12Hours
                    format="h:mm A"
                    defaultValue={ [ moment(startTime, 'h:mm A'), moment(endTime, 'h:mm A')] }
                />
                : <RangePicker 
                    onChange={onChange}
                    use12Hours
                    format="h:mm A"
                />
            }
        </div>
    )
};

export default TimeRangePickerCom;