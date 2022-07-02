import React from 'react';
import DatePicker from 'sassy-datepicker';

const Calender = () => {
    const onChange = (date) => {
        console.log(date.toString());
    };
    return (
        <div className='flex justify-center items-center my-10'>
            <DatePicker onChange={onChange} />
        </div>
    );
};

export default Calender;