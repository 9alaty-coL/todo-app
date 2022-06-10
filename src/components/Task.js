import { Draggable } from 'react-beautiful-dnd'
import classes from './Task.module.scss'
import { useSelector } from 'react-redux'
import {Button} from '@mui/material'
import DeleteModal from './Modal'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import {taskActions} from '../store/task-slice'

const buttonStyle = {
    padding: '0px',
    // backgroundColor: 'red'
}

const Task = props => {
    const dispatch = useDispatch()
    const [open, setOpen] = useState(false)
    const taskList = useSelector(state => state.tasks)

    const deleteHandler = (taskId, columnId, index) => {
        dispatch(taskActions.delete({taskId: taskId, columnId: columnId, index: index}))
    }

    return <Draggable index={props.index} draggableId={props.draggableId}>
        {(provided, snapshot) => {
            return <div ref={provided.innerRef} className={`${classes.task} ${snapshot.isDragging ? classes.dragging : ''}`}  {...provided.draggableProps} {...provided.dragHandleProps}>
                <span>{taskList.tasks[props.draggableId].content}</span>
                <Button color="error" variant="outlined" style={buttonStyle} onClick={()=>setOpen(true)}>X</Button>
                <DeleteModal open={open} handleClose={()=>setOpen(false)}>
                    <h2>Delete this task?</h2>
                    <span>You can't undo this action</span>
                    <div className={classes.deleteBtnGroup}>
                        <Button variant="contained" color="error" onClick={deleteHandler.bind(null, props.draggableId, props.droppableId, props.index)}>Delete</Button>
                        <Button variant="contained" style={{backgroundColor:"#777", marginLeft:"5px"}} onClick={()=>setOpen(false)}>Cancel</Button>
                    </div>
                </DeleteModal>
            </div>
        }}
    </Draggable>
}

export default Task