const storeInitialValue = []

const tasksReducer = (store = storeInitialValue, action) => {
     switch (action.type) {
          case "ADD_TASK": {
               return [...store, { ...action.payload }]
          }
          case "GET_TASKS": {
               return action.payload
          }
          case "EDIT_TASK": {
               const result = store.map(ele => {
                    if (ele.id === action.payload.id) {
                         return { ...action.payload }
                    } else {
                         return ele
                    }
               })
               return result
          }
          case "DELETE_TASK": {
               const result = store.filter(ele => ele.id !== action.payload.id)
               return result
          }
          default: {
               return [...store]
          }
     }
}

export default tasksReducer