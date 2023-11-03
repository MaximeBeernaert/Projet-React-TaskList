import React from 'react'
import Button from '@mui/material/Button';



// Bouton de remove
export default function RemoveButton() {
    //fonction quand on clique sur un bouton:
    // on supprime la div du bouton (pour qu'il disparaisse de la liste visuelle)
    const removeTask  = (e) => {
        console.log(e.target.parentElement.parentElement);
        e.target.parentElement.parentElement.remove();
        const newArray = JSON.parse(localStorage.getItem('tasks'));
        // on vérifie si l'ID de la div supprimée existe dans le Local Storage Tasks
        newArray.forEach((task, index) => {
            console.log(localStorage.getItem('tasks'));
            // Si c'est le cas, on supprime la valeur
            if(index == e.target.parentElement.parentElement.id){
                newArray.splice(index,1);
            }
        });
        // on reset le Local Storage Tasks
        localStorage.setItem('tasks', JSON.stringify(newArray));
    }
  return (
    <div className='TaskRemove TaskElement'>
        <Button variant="outlined" onClick={(e) => {removeTask(e)}}>
          Supprimer
        </Button>
    </div>
  )
}
