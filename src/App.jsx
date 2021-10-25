import React, {useState} from 'react'
import Tasks from './components/Tasks';
import "./components/css/App.css";
import AddTask from './components/AddTask';

const App = () => {
  // let message = 'Me livrei da maldição !!'; //variavel comum
  const [tasks, setTasks] = useState([
    {
      id: '1',
      title: 'Estudar Programação',
      completed: false,
    },

    {
      id: '2',
      title: 'Ler Livros',
      completed: true,
    }
  ]); //variavel state - Atualiza o componente

  //função
  const handleTaskAddition = (taskTitle) => {
    const newTasks = [ 
      ...tasks, {
        title: taskTitle,
        id: Math.random(10),
        completed: false
      },
    ];

    setTasks(newTasks);
  }
  return (
    <>
      <div className="container">
        <AddTask handleTaskAddition={handleTaskAddition} />
        <Tasks tasks={tasks} />
      </div>
      
    </>
  );
     
}

export default App;