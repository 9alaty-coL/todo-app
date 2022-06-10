import classes from './Table.module.scss'
import Column from './Column'
import { useSelector, useDispatch } from 'react-redux';
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { taskActions } from '../store/task-slice';

const Table = props => {
    const dispatch = useDispatch()
    const taskList = useSelector(state => state.tasks)
    // console.log(taskList)
    const onDragEnd = (result) => {
        const { source, destination } = result;

        // dropped outside the list
        if (!destination) {
          return;
        }

        dispatch(taskActions.move({
            column1: source.droppableId,
            column2: destination.droppableId,
            index1: source.index,
            index2: destination.index,
        }))
    }
    return <div className={classes.table}>
        <DragDropContext onDragEnd={onDragEnd}>
            {taskList.columnOrder.map(colId => <Column key={colId} droppableId={colId} />)}
        </DragDropContext>
    </div>
}

export default Table
