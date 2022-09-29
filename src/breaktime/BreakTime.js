import React from 'react';

const BreakTime = (props) => {
    const { breakTime } = props.breakTime;
    const { addBreakTimeOnClick } = props;
    console.log(props)
    return (

        <div className='break-time'>
            <p onClick={() => addBreakTimeOnClick(breakTime)}>
                <b>{breakTime}</b>mins
            </p>
        </div>
    );
};

export default BreakTime;