import React from 'react';
import './Task.css';

const Task = (props) => {
    return (
        <div className='task-row'>
            <div className='check-column'>
                <input type="checkbox" onChange={props.checkIt} checked={props.isDone} id={props.id} />
                <label onClick={props.checkIt} htmlFor={props.id} className="custom-checkbox"></label>
            </div>
            <p className='simple-text'>{props.text}</p>
            <button className='btn-delete' onClick={props.deleteIt}><span className='x-span'>x</span></button>
        </div>
    )
}

export default Task;
