import React, { useState, useEffect }from 'react';
import { levels } from '../../models/levels.enum';
import { Task } from '../../models/task.class';
import TaskForm from '../pure/forms/taskForm';
import TaskComponent from '../pure/task';



const TaskListComponent = () => {
    
    const defaultTask1 = new Task('example1', 'default description1', false, levels.NORMAL)
    const defaultTask2 = new Task('example2', 'default description2', true, levels.URGENTE)
    const defaultTask3 = new Task('example3', 'default description3', true, levels.BLOCKING)
    


    const [tasks, setTasks] = useState([defaultTask1, defaultTask2, defaultTask3]);
    const [loadin, setloading] = useState(true);
    

    useEffect(() => {
        console.log('task estate modified')
        setloading(false);
        return () => {
            console.log('taskList component is goin to unmount....')
        };
    }, [tasks]);
    const changeState= (id) =>{
        console.log('cambiar estado de una tarea')
    }

    return (
        <div>
                <div className='col-12'>
                    <div className='card'>
                        <div className='card-header p-3'>
                            <h5>
                                your task:
                            </h5>
                        </div>
                        <div className='card-body' data-msb-perfect-scrollbar='true' style={{position : 'relative', height:'400px'}}>
                            <table>
                                <thead>
                                    <tr>
                                        <th scope='col'>Titel</th>
                                        <th sccope='col'>Description</th>
                                        <th sccope='col'>Priority</th>
                                        <th sccope='col'>Actions</th>
                                    </tr>                                    
                                </thead>
                                <tbody>
                                { tasks.map((task, index) => {
                                    return (
                                            <TaskComponent 
                                                key={index}
                                                task={task}>
                                            </TaskComponent>
                                        )
                                    }
                                )}
                                </tbody>
                            </table>
                            <TaskForm></TaskForm>
                        </div>
                    </div>
                </div>
        </div>
    );
};


export default TaskListComponent;
