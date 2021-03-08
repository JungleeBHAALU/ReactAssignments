import React from 'react'

const person = (props) => {
    console.log(props.name);
    console.log(props.age);

     return (
        <div>
            <p onClick={props.click1}>I'm {props.name} I am {props.age} years old!</p>
            <p onClick={props.click1}>{props.children}</p>
        </div>
     )
};


export default person;
