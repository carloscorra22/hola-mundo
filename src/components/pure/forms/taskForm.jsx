import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { levels } from '../../../models/levels.enum';
import { Task } from '../../../models/task.class';

const TaskForm = ({add, length}) => {
    const nameRef = useRef('');
    const descriptionRef = useRef('');
    const levelRef = useRef(levels.NORMAL);

    function addTask(e){
        e.preventDefault();
        const newTask = new Task(
            nameRef.current.value,
            descriptionRef.current.value,
            false,
            levelRef.current.value
        );
        add(newTask);
    }

    const normalStyle = {
        color:'blue',
        fontWeight:'bold'
    }
    const urgentStyle = {
        color:'orange',
        fontWeight:'bold'
    }
    const blockingStyle = {
        color:'red',
        fontWeight:'bold'
    }

    return (
        <form onSubmit={addTask} className='d-flex justify-content-center aling-item-center mb-4'>
        <div className='form-ouline flex-fill'>
            <input ref={nameRef} id='inputName' type='text' className='form-control form-control-lg' required autoFocus placeholder='task name' />
            <input ref={descriptionRef} id='inputDescription' type='text' className='form-control form-control-lg' required  placeholder='task description' />
            <select ref={levelRef} defaultValue={levels.NORMAL} id='selectLevel' className='form-control form-control-lg' >
                <option style={normalStyle} value={levels.NORMAL}>
                    NORMAL
                </option>
                <option style={urgentStyle} value={levels.URGENTE}>
                    URGENTE
                </option>
                <option style={blockingStyle} value={levels.BLOCKING}>
                    BLOCKING
                </option>
            </select>
            <button type='submit' className='btn btn-success btn-lg sm-2'>
                {length > 0 ? 'add task':'create task'}
            </button>
        </div>
        </form>
    );
}

TaskForm.prototype = {
    add : PropTypes.func.isRequired,
    length : PropTypes.number.isRequired
}

export default TaskForm;
