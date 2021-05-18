import React from 'react';
import './App.css'
import AddTastk from './AddTask';
import TaskList from './TaskList';
import TaskState from './context/TaskState';

function App() {



	return (
    <TaskState>
      <div>
        <h1>React app</h1>

        <div className='container'>
        <AddTastk //onCreateTask={handleAddTask}  
        />
          <TaskList  //todos={todos} handleDeleteItem={handleDeleteItem} handleChange={handleChange}
          />
        </div>
      </div>
    </TaskState>
	);
}

export default App;
