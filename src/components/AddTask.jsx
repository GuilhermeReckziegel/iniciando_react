import React, { useState } from 'react';
import Button from './Button';
import "./css/AddTask.css";

const AddTask = ({ handleTaskAddition }) => {
    //state
    const [inputData, setinputData] = useState('')

    //função
    const handleInputChange = (e) => {
        //console.log(e.target.value)
        setinputData(e.target.value);
    };

    //funçao
    const handleAddTaskClick = () => {
        handleTaskAddition(inputData)
    }

    return ( 
    <div className="add-task-container">
        
        <input onChange={handleInputChange} className="add-task-input" type="text"/>

        <div className="add-task-button-container">
            <Button onClick={handleAddTaskClick}>Adicionar</Button>
        </div>
        
    </div>
        
     );
}
 
export default AddTask;