import React from 'react';
import "./css/itemTask.css";

const item_task = ({item_task}) => {
    return <div className="task-container">{item_task.title}</div>;
};
 
export default item_task;