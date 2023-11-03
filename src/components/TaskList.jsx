import React from 'react'
import FinishButton from './FinishButton'
import RemoveButton from './RemoveButton'


// Permet d'afficher la liste des tâches
export default function TaskList() {
  return (
    <div className='TaskListContainer'>
         {/* on récupère toutes les tâches et on les affiche, avec leur bouton supprimer et*/}
        {JSON.parse(localStorage.getItem('tasks')).map((task, index) => (
            <div className='TaskContainer' id={index}>
                <div className='TaskText TaskElement'>
                    {task} | {index+1}
                </div>
                <FinishButton/>
                <RemoveButton/>
            </div>
        ))}
    </div>
  )
}
