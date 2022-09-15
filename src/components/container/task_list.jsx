import React from 'react';
import { levels } from '../../models/levels.enum';
import { Task } from '../../models/task.class';
import TaskComponent from '../pure/task';



const TaskListComponent = () => {
    const defaultTask = new Task('example', 'default description', false, levels.NORMAL)
    const changeState= (id) =>{
        console.log('cambiar estado de una tarea')
        }

    return (
        <div>
            <h1>
                <div>
                    <h1>your task:</h1>
                </div>
                <TaskComponent task={defaultTask}></TaskComponent>
            </h1>
        </div>
    );
};


export default TaskListComponent;
