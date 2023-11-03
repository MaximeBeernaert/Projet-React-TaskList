import React, { useState } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/Input';
// import AddTask from './AddTask';
import TaskList from './TaskList';

// J'ai essayé d'utiliser Material UI pour faire mon visuel, donc il y a des petits changements partout.

export default function TaskMaker() {
    const [task, setTask ]= useState();
    //  pour ajouter une task, on met dans le local storage. 
    // les tasks sont stockées dans un tableau dans le local storage (donc une seule entrée, Tasks). 
    // on vérifie si cette entrée existe déjà, et si oui, on ajoute par dessus en copiant l'ancienne entrée
    // sinon on ajoute une nouvelle entrée
    const addTask = (e) => {
        e.preventDefault();
        if(localStorage.getItem("tasks")){
            const oldTasks = JSON.parse(localStorage.getItem('tasks'));
            oldTasks.push(task);
            localStorage.setItem('tasks', JSON.stringify(oldTasks))
        }else{
            localStorage.setItem('tasks', JSON.stringify([task]))
        }
    }
  
  
    return (
      <div className="App">
        <div className='UserInputContainer'>
            {/* comme j'ai utilisé Material UI, je profite de leur élements spéciaux. ici, le Box me sert de form et le TextField de input */}
            {/* appuyer sur entrée pour entregistrer une tâche.. parfois, l'enregistrement n'est pas très réactif */}
          <Box component="form" sx={{'& > :not(style)': { m: 1, width: '25ch' }, }} noValidate autoComplete="off" onSubmit={e => addTask(e)} >
            <TextField id="taskTextField" placeholder="Tâche à ajouter" label="Tâche à ajouter" variant="outlined" required onInput={ e=>setTask(e.target.value)} />
          </Box>
        </div>
        {/* on affiche la liste des tâches */}
        <div className='TodoListContainer'>
            <TaskList/>
        </div>
      </div>
    );
  }
