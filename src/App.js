import TasksContainer from './components/TasksContainer'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { startGetTasks } from './redux/action/taskAction'

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(startGetTasks())
  }, [])

  return (
    <TasksContainer />
  );
}

export default App