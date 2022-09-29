import { faMapLocation } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { hover } from '@testing-library/user-event/dist/hover';
import React, { useEffect, useState } from 'react';
import ExerciseType from '../exerciseType/ExerciseType';
import './Exercise.css';

const Exercise = () => {
    const [exercises, setExercises] = useState([]);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setExercises(data))
    }, [])

    return (
        <div>
            <h3>Select your exercise</h3>
            <div className='exercise'>
                <div className='exercises'>
                    {
                        exercises.map(exercise => <ExerciseType exercise={exercise} key={exercise.id}></ExerciseType>)
                    }
                </div>

                <div className='exercise-duration'>
                    <div className='person-details'>
                        <img src="https://scontent.fbzl4-1.fna.fbcdn.net/v/t39.30808-6/293611693_3260351037583927_339813055981838569_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=vRJ9VAd_31kAX-L0aOK&tn=YmLE72iKcviK3JCl&_nc_ht=scontent.fbzl4-1.fna&oh=00_AT8_pOMFOvIOHg5hkiHAKjn07JwdncbFii9tNm7W-oaFng&oe=633A3240" alt="" />
                        <p><b>Nazrul Islam Chowdhury</b></p>
                        <p> <FontAwesomeIcon icon={faMapLocation}></FontAwesomeIcon> Noakhali,Bangladesh</p>

                        <div style={{ display: 'flex', gap: '15px', backgroundColor: 'rgba(34, 119, 119, 0.478)', borderRadius: '10px', justifyContent: 'space-evenly' }}>
                            <div>
                                <p><b style={{ fontSize: '25px' }}>76</b>kg</p>
                                <p>Height</p>
                            </div>
                            <div>
                                <p><b style={{ fontSize: '25px' }}>5.11</b></p>
                                <p>Weight</p>
                            </div>
                            <div>
                                <p><b style={{ fontSize: '25px' }}>24</b>yrs</p>
                                <p>Age</p>
                            </div>
                        </div>
                    </div>
                    <p><b style={{ fontSize: '20px' }}>Add a break</b></p>
                    <div style={{ display: 'flex', gap: '15px', backgroundColor: 'rgba(34, 119, 119, 0.478)', borderRadius: '10px', justifyContent: 'space-evenly' }}>
                        <p className='break-type'>
                            <b style={{ fontSize: '25px' }}>5</b>mins
                        </p>
                        <p className='break-type'>
                            <b style={{ fontSize: '25px' }}>10</b>mins
                        </p>
                        <p className='break-type'>
                            <b style={{ fontSize: '25px' }}>15</b>mins
                        </p>
                        <p className='break-type'>
                            <b style={{ fontSize: '25px' }}>20</b>mins
                        </p>
                    </div>
                    <p><b style={{ fontSize: '20px' }}>Exercise details</b></p>
                    <div className='exercise-details'>
                        <p><b>Exercise time</b></p>
                        <p><b>Break time</b></p>
                    </div>
                    <button className='btn-activity'>
                        <p>Activity Completed</p>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Exercise;