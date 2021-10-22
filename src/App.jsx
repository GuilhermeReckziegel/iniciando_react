import React, {useState} from 'react'
import Tasks from './components/Tasks';
import "./App.css";

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

  return (
    <>
      <div className="container">
        <Tasks tasks={tasks} />
      </div>
      
    </>
  );
     
}

export default App;