
import React, { useEffect, useState } from 'react';
import ExerciseDetails from '../exerciseDetails/ExerciseDetails';
import ExerciseType from '../exerciseType/ExerciseType';
import './Exercise.css';

const Exercise = () => {
    const [exercises, setExercises] = useState([]);
    const [exerciseDetails, setExerciseDetails] = useState([]);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setExercises(data))
    }, [])
    const addOnClick = (exercise) => {
        // console.log(exercise);
        const newExerciseDetails = [...exerciseDetails, exercise];
        setExerciseDetails(newExerciseDetails);
    }

    return (
        <div>
            <h3 style={{ fontSize: '25px' }}>Select your exercise</h3>
            <div className='exercise'>
                <div className='exercises'>
                    {
                        exercises.map(exercise => <ExerciseType exercise={exercise} key={exercise.id}
                            addOnClick={addOnClick}></ExerciseType>)
                    }
                </div>

                <div className='exercise-duration'>
                    <ExerciseDetails exerciseDetails={exerciseDetails}></ExerciseDetails>
                </div>
            </div>

        </div>
    )
};

export default Exercise;