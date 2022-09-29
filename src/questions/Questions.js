import React from 'react';
import './Questions.css';

const Questions = () => {
    return (
        <div className='questions'>
            <div>
                <h2>
                    Q1: How does react works?

                </h2>
                <p><b>Ans:</b>   ReactJS divides the UI into isolated reusable pieces of code known as components.React components work similarly to JavaScript functions as they accept arbitrary inputs called properties or props.It's possible to have as many components as necessary without cluttering your code.</p>
            </div>
            <div>
                <h2 >
                    Q2: Difference between props and state

                </h2>
                <p>
                    <b>Ans:</b>  Props are used to pass data from one component to another. The state is a local data storage that is local to the component only and cannot be passed to other components. The this. setState property is used to update the state values in the component.
                </p>
            </div>
            <div>
                <h2>
                    Q3:Where does useEffect can be used beside dataload?

                </h2>
                <p>
                    <b>Ans:</b> Besides dataload The useEffect Hook allows you to perform side effects in your components.
                </p>
            </div>



        </div >

    );
};

export default Questions;