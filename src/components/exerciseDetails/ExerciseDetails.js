import React, { useEffect, useState } from 'react';
import { faMapLocation } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './ExerciseDetails.css';


const ExerciseDetails = (props) => {
    const { exerciseDetails } = props;
    const { breakTimes } = props;
    let exerciseTime = 0;
    for (const exercise of exerciseDetails) {
        exerciseTime = exerciseTime + exercise.duration;
    }
    let breakTime = 0;
    for (const breakTime of breakTimes) {
        // breakTime = breakTime + breakTime.breakTime;
        console.log(breakTime)
    }

    return (
        <div className='exercise-details'>
            <div className='person-details'>
                <img src="https://scontent.fbzl4-1.fna.fbcdn.net/v/t39.30808-6/293611693_3260351037583927_339813055981838569_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=vRJ9VAd_31kAX-L0aOK&tn=YmLE72iKcviK3JCl&_nc_ht=scontent.fbzl4-1.fna&oh=00_AT8_pOMFOvIOHg5hkiHAKjn07JwdncbFii9tNm7W-oaFng&oe=633A3240" alt="" />
                <p><b>Nazrul Islam Chowdhury</b></p>
                <p> <FontAwesomeIcon icon={faMapLocation}></FontAwesomeIcon> Noakhali,Bangladesh</p>

                <div style={{ display: 'flex', gap: '15px', backgroundColor: 'rgba(34, 119, 119, 0.478)', borderRadius: '10px', justifyContent: 'space-evenly' }}>
                    <div>
                        <p><b style={{ fontSize: '25px' }}>76</b>kg</p>
                        <p>Weight</p>
                    </div>
                    <div>
                        <p><b style={{ fontSize: '25px' }}>5.11</b></p>
                        <p>Height</p>
                    </div>
                    <div>
                        <p><b style={{ fontSize: '25px' }}>24</b>yrs</p>
                        <p>Age</p>
                    </div>
                </div>
            </div>
            <p><b style={{ fontSize: '20px' }}>Add a break</b></p>

            <p><b style={{ fontSize: '20px' }}>Exercise details</b></p>
            <div className='exercise-details'>
                <p><b>Exercise time</b>  {exerciseTime} mins</p>
                <p><b>Break time</b>{breakTime} mins</p>
            </div>
            <button className='btn-activity'>
                <p>Activity Completed</p>
            </button>
        </div>
    );
};

export default ExerciseDetails;