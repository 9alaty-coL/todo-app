import classes from './Column.module.scss'
import Task from './Task'
import { useSelector } from 'react-redux'
import { Droppable } from 'react-beautiful-dnd'
import { Button } from '@mui/material'
import { useState } from 'react'
import AddModal from './AddModal'

const Column = props => {
    const [open, setOpen] = useState(false)
    const taskList = useSelector(state => state.tasks)
    return <Droppable droppableId={props.droppableId}>
        {(provided, snapshot) => {
            return <div ref={provided.innerRef}
            className={`${classes.column} ${snapshot.isDraggingOver ? classes.dragging : classes.notDragging}`}>
                <div className={classes.title}>
                    {taskList.columns[props.droppableId].title}
                </div>
                <div className={classes.content}>
                    {taskList.columns[props.droppableId].taskIds.length > 0 ? 
                    taskList.columns[props.droppableId].taskIds.map((taskId, index) => {
                        return <Task droppableId={props.droppableId} key={taskId} draggableId={taskId} index={index} />
                    }) :
                    <i style={{color: '#888', width:'100%', display:'block', textAlign:'center'}}>Empty!</i>}
                    {provided.placeholder}
                </div>
                <div className={classes.btnGroup}>
                    <Button style={{width: '100%'}} onClick={()=>setOpen(true)}>+ Add a todo</Button>
                </div>
                <AddModal open={open} handleClose={()=>setOpen(false)} columnId={props.droppableId}/>
            </div>
        }}
    </Droppable>
}

export default Column