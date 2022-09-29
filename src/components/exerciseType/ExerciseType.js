import React from 'react';
import './ExerciseType.css';

const ExerciseType = (props) => {
    const { img, title, details, duration } = props.exercise;
    return (
        <div className='exercise-type'>
            <img src={img} alt="" />
            <div className='exercise-details'>
                <h3>{title}</h3>
                <p>{details}</p>
                <p>Age limit: 20-30</p>
                <p>Duration:{duration} mins</p>
            </div>
            <button className='btn-add'>
                <p>Add to list</p>
            </button>
        </div>
    );
};

export default ExerciseType;