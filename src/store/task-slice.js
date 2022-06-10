import { createSlice } from "@reduxjs/toolkit";
import {generateId} from '../utils/idGenerator'

const initialTaskListState = localStorage.getItem('todo_app_nextlab_challenge') ? 
JSON.parse(localStorage.getItem('todo_app_nextlab_challenge')) : 
{
    tasks: {
      'task-1': { id: 'task-1', content: 'Task to do'},
      'task-2': { id: 'task-2', content: 'Task in progress'},
      'task-3': { id: 'task-3', content: 'Finished task'},
    },
    columns: {
      'column-1' :{
        id: 'column-1',
        title: 'To do',
        taskIds: ['task-1'],
      },
      'column-2' :{
        id: 'column-3',
        title: 'Doing',
        taskIds: ['task-2'],
      },
      'column-3' :{
        id: 'column-3',
        title: 'Finished',
        taskIds: ['task-3'],
      },
    },
    columnOrder: ['column-1', 'column-2', 'column-3'],
  }
const taskSlice = createSlice({
  name: "taskList",
  initialState: initialTaskListState,
  reducers: {
    move(state, action){
      const {column1, column2, index1, index2} = action.payload
        const task = state.columns[column1].taskIds[index1]
        state.columns[column1].taskIds.splice(index1, 1)
        state.columns[column2].taskIds.splice(index2, 0, task)
        localStorage.setItem('todo_app_nextlab_challenge', JSON.stringify(state))
    },
    delete(state, action){
      const {taskId, columnId, index} = action.payload
      delete state.tasks[taskId]
      state.columns[columnId].taskIds.splice(index, 1)
      localStorage.setItem('todo_app_nextlab_challenge', JSON.stringify(state))
    },
    add(state, action){
      const {todo, columnId} = action.payload
      const id = generateId()
      state.tasks[id] = {
        id: 'id',
        content: todo,
      }
      state.columns[columnId].taskIds.push(id)
      localStorage.setItem('todo_app_nextlab_challenge', JSON.stringify(state))
    }
  },
});


export const taskActions = taskSlice.actions;
export default taskSlice;
