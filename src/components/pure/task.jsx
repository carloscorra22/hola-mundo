import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Task } from '../../models/task.class';
import '../../styles/task.scss'
import { levels } from '../../models/levels.enum';


const TaskComponent = ({ task, complete, remove }) => {

    useEffect(() => {
        console.log('tarea crada')
        return () => {
            console.log(`Task: ${task.name} is goin to unmont`);
        };
    }, [task]);

    function taskLevelBadge (){
        switch (task.level) {
            case levels.NORMAL:
                return(<h6 className='mb-0'>
                        <span className='badge bg-primary'>
                            {task.level}
                        </span>
                </h6>)
            case levels.URGENTE:
                return(<h6 className='mb-0'>
                        <span className='badge bg-warning'>
                            {task.level}
                        </span>
                </h6>)
            case levels.BLOCKING:
                return(<h6 className='mb-0'>
                        <span className='badge bg-danger'>
                            {task.level}
                        </span>
                </h6>)
        
            default:
                break;
        }
    }

    function iconTaskCompleted(){
        if(task.completed){
            return(<i onClick={() => complete(task)} className='bi-toggle-on task-action' style={{color: 'green'}}></i>)
        }else{
            return(<i onClick={() => complete(task)} className='bi-toggle-off task-action' style={{color:'grey' }}></i>)
        }

    }

    return (
        <tr className='fw-normal'> 
            <th>
                <span className='ms-2'>{task.name}</span>
            </th>
            <td className='aling-meddle'>
                <span >{task.description}</span>
            </td>
            <td className='aling-meddle'>
                {taskLevelBadge()}
            </td>
            <td className='aling-meddle'>
                {iconTaskCompleted()}
                <i className='bi-trash task-action' onClick={()=> remove(task)} style={{color:'black'}}></i>
            </td>
        </tr>
    );
};


TaskComponent.propTypes = {
  task: PropTypes.instanceOf(Task).isRequired,
  complete : PropTypes.func.isRequired,
  remove : PropTypes.func.isRequired
};


export default TaskComponent;
