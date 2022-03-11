import React, { useState } from "react"
import EditTask from './EditTask'
import { useDispatch } from "react-redux"
import { startDeleteTask } from '../redux/action/taskAction'
import IconButton from '@mui/material/IconButton'
import DeleteIcon from '@mui/icons-material/Delete'
import EditIcon from '@mui/icons-material/Edit'
import CancelIcon from '@mui/icons-material/Close';
import { GridActionsCellItem } from '@mui/x-data-grid-pro'

const TaskList = (props) => {
     const { id, title, status } = props
     const [toggle, setToggle] = useState(false)
     const dispatch = useDispatch()

     const handleDelete = (id) => {
          dispatch(startDeleteTask(id))
     }

     const handleToggle = () => {
          setToggle(!toggle)
     }

     return (
          <>
               {
                    !toggle ? (
                         <div style={{ width: '80%', border: 'outset', margin: '10px', backgroundColor: status ? "yellowgreen" : "orange" }}>
                              <h3 style={{ display: 'inline-block', width: '80%', marginLeft: '30px' }}>{title}</h3>

                              <div style={{ display: 'inline-block' }}>
                                   <GridActionsCellItem
                                        icon={<EditIcon />}
                                        label="Edit"
                                        className="textPrimary"
                                        onClick={handleToggle}
                                        color="inherit"
                                   />
                                   <IconButton onClick={() => { handleDelete(id) }} aria-label="delete" size="small">
                                        <DeleteIcon />
                                   </IconButton>
                              </div>

                         </div>
                    ) : (
                         <div style={{ width: '80%', border: 'outset', margin: '10px', backgroundColor: status ? "yellowgreen" : "orange", display: 'flex', justifyContent: 'center' }}>
                              <EditTask handleToggle={handleToggle} id={id} title={title} status={status} />
                              <GridActionsCellItem
                                   icon={<CancelIcon />}
                                   label="Cancel"
                                   className="textPrimary"
                                   onClick={handleToggle}
                                   color="inherit"
                              />
                         </div>
                    )
               }
          </ >
     )
}

export default TaskList