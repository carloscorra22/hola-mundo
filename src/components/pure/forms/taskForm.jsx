import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { levels } from '../../../models/levels.enum';
import { Task } from '../../../models/task.class';

const TaskForm = ({add}) => {
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

    return (
        <form onSubmit={addTask} className='d-flex justify-content-center aling-item-center mb-4'>
        <div className='form-ouline flex-fill'>
            <input ref={nameRef} id='inputName' type='text' className='form-control form-control-lg' required autoFocus placeholder='task name' />
            <input ref={descriptionRef} id='inputDescription' type='text' className='form-control form-control-lg' required  placeholder='task description' />
            <label htmlFor='selectLevel' className='sr-only'>
                priority
            </label>
            <select ref={levelRef} defaultValue={levels.NORMAL} id='selectLevel' >
                <option value={levels.NORMAL}>
                    normal
                </option>
                <option value={levels.URGENTE}>
                    URGENTE
                </option>
                <option value={levels.BLOCKING}>
                    BLOCKING
                </option>
            </select>
            <button type='submit' className='btn btn-success btn-lg sm-2'>Add</button>
        </div>
            
        </form>
    );
}

TaskForm.prototype = {
    add : PropTypes.func.isRequired
}

export default TaskForm;
