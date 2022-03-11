import React from 'react'
import { useSelector } from 'react-redux'
import AddTask from './AddTask'
import TaskList from './TaskList'

const TasksContainer = () => {
     const store = useSelector((store) => {
          return store.tasksReducer
     })

     return (
          <>
               <h1>Task Box</h1>
               <div style={{ display: 'flex' }}>
                    <div style={{ width: '60%' }}>
                         <h2>My Tasks - {store.length}</h2>
                         {
                              store.map(ele => <TaskList key={ele.id} {...ele} />)
                         }
                    </div>
                    <AddTask />
               </div>
          </>
     )
}

export default TasksContainer