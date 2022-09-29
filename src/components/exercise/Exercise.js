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

                <div>
                    <p>exercise details</p>
                </div>
            </div>
        </div>
    );
};

export default Exercise;