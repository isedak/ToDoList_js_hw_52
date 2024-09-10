import React from 'react';
import './AddTaskForm.css';

const AddTaskForm = (props) => {
    return (
        <div className="form-column">
            <p className='gray-text'>Введите текст задания:</p>
            <div className='form-row'>
                <input type="text" className='input-box' maxLength="150" onChange={props.changeCurrentText} value={props.value} />
                <button className='btn-add' onClick={props.addNewTask}><span className='plus-span'>+</span></button>
            </div>
        </div>
    );};

export default AddTaskForm;
