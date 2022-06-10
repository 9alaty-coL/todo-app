import classes from './AddModal.module.scss'
import Modal from '../components/Modal'
import { useDispatch } from 'react-redux'
import { useRef, useEffect } from 'react'
import { taskActions } from '../store/task-slice'
import { Button } from '@mui/material'

const AddModal = props => {
    const dispatch = useDispatch()
    const todoRef = useRef()
    const formRef = useRef()
    // useEffect(() => {
    //     todoRef.current.focus()
    // }, []);
    const onSubmitHandler = e => {
        e.preventDefault()
        dispatch(taskActions.add({
            todo: todoRef.current.value,
            columnId: props.columnId,
        }))
        props.handleClose()
    }
    const onKeyDownHandler = e => {
        if (e.keyCode === 13  && !e.shiftKey){
            e.preventDefault()
            if (todoRef.current.value){
                dispatch(taskActions.add({
                    todo: todoRef.current.value,
                    columnId: props.columnId,
                }))
                props.handleClose()
            }
        }
    }
    return <Modal open={props.open} handleClose={props.handleClose}>
        <h2>Add a new todo</h2>
        <form ref={formRef} onSubmit={onSubmitHandler}>
            <textarea onKeyDown={onKeyDownHandler} autoFocus ref={todoRef} className={classes.area} placeholder='Write your task...' required></textarea>
            <div className={classes.btnGroup}>
                <Button variant='contained' type='submit' color='success'>Add</Button>
                <Button variant='contained' style={{backgroundColor:"#777", marginLeft:"5px"}} onClick={props.handleClose}>Cancel</Button>
            </div>
        </form>
    </Modal>
}

export default AddModal