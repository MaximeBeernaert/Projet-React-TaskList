import React from 'react'
import Checkbox from '@mui/material/Checkbox';

// Juste pour faire joli
export default function FinishButton() {
  return (
    <div className='TaskFinish TaskElement'>
        <Checkbox
          sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }}
        />
    </div>
  )
}
