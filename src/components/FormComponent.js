import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { Checkbox } from '@mui/material';
import { FavoriteBorder, Favorite } from '@mui/icons-material'
import SaveIcon from '@mui/icons-material/Save';
import { GridActionsCellItem } from '@mui/x-data-grid-pro';


const FormComponent = (props) => {
     const { addTask, id: userId, title: userTitle, status: userStatus } = props
     const [input, setInput] = useState(userTitle ? userTitle : '')
     const [status, setStatus] = useState(userStatus ? userStatus : false)
     const [id, setId] = useState(userId ? userId : uuidv4())

     const handleInput = (e) => {
          setInput(e.target.value)
     }

     const handleStatusChange = (e) => {
          setStatus(e.target.checked)
     }

     const handleSubmit = (e) => {
          e.preventDefault()
          const formData = {
               id: id,
               title: input,
               status, status
          }
          addTask(formData)
          setInput('')
          setStatus(false)
          setId(uuidv4())
     }

     return (
          <form onSubmit={handleSubmit}>
               <label htmlFor='input'>Title</label>
               {!userTitle && <br />}
               <input type="text" id='input' value={input} onChange={handleInput} />
               {!userTitle && <br />}

               <Checkbox checked={status} id='checkbox' onChange={handleStatusChange} icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
               <label htmlFor='checkbox'>Completed</label>


               <GridActionsCellItem
                    icon={<SaveIcon />}
                    label="Save"
                    onClick={handleSubmit}
                    color="primary"
                    id='save'
               />
               <label htmlFor='save'>Save</label>
          </form >
     )
}

export default FormComponent