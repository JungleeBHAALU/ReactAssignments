import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const app= props =>{
    const [personsState,setPersonsState]=useState( {
      persons: [
        {name:'max',age:28},
        {name:'dax',age:29},
        {name:'jax',age:27}
      ],
      
    }
    );

    const [otherState,setOtherState]= useState('some other value');

    const switchNameHandler= () => {
      //console.log('was clicked!');
      //Dont do this: this.state.persons[0].name="Maxxxxx";
      setPersonsState({persons: [
        {name:'maxaaaaa',age:28},
        {name:'daxaaaaa',age:29},
        {name:'jaxaaaaa',age:27}
      ]});
    }
    
  
    return (
      <div className="App">
       <h1>Hi, Im react app</h1>
       <button onClick={switchNameHandler}>Switch Nmae</button>
       <Person 
       name={personsState.persons[0].name} 
       age={personsState.persons[0].age} />
       <Person 
       name={personsState.persons[1].name}  
       age={personsState.persons[1].age}
       click1={switchNameHandler}/>My Hobbies: Racing
       <Person 
       name={personsState.persons[2].name}  
       age={personsState.persons[2].age} />
      </div>
    );
  
}

export default app;


