import React from 'react';
import './ExerciseType.css';

const ExerciseType = (props) => {
    const { img, title } = props.exercise;
    return (
        <div className='exercises'>
            <img src={img} alt="" />
            <h3>{title}</h3>
        </div>
    );
};

export default ExerciseType;