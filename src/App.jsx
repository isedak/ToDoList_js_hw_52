import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';
import './App.css';
import AddTaskForm from './components/AddTaskForm/AddTaskForm';
import Task from './components/Task/Task';

const App = () => {

  const [tasks, setTasks] = useState(
    [
      { id: uuid(), text: 'Создать react проект.', isDone: true },
      { id: uuid(), text: 'Создать компонент Task.', isDone: false }
    ]
  );

  const [currentText, setCurrentText] = useState(
    { text: 'Задача...' }
  );

  const checkThatDone = (event, id) => {
    const index = tasks.findIndex(t => t.id === id);
    const copyTasks = [...tasks];
    const copyTask = { ...tasks[index] };
    copyTask.isDone = event.target.checked;
    copyTasks[index] = copyTask;
    setTasks(copyTasks);
  }

  const changeText = (event) => {
    const copyCurrentText = { ...currentText };
    copyCurrentText.text = event.target.value;
    setCurrentText(copyCurrentText);
  };

  const clearTextInput = () => {
    const copyCurrentText = { ...currentText };
    copyCurrentText.text = '';
    setCurrentText(copyCurrentText);
  };

  const deleteTask = (id) => {
    const index = tasks.findIndex(t => t.id === id);
    const tasksCopy = [...tasks];
    tasksCopy.splice(index, 1);
    setTasks(tasksCopy);
  };

  const addTask = (newText) => {
    const newTask = { id: uuid(), text: newText, isDone: false };
    const tasksCopy = [...tasks];
    tasksCopy.push(newTask);
    setTasks(tasksCopy);
    clearTextInput();
  };

  let tasksList = [];

  if (tasks.length) {
    tasksList = tasks.map(task => {
      return <Task
        key={task.id}
        id={task.id}
        text={task.text}
        isDone={task.isDone}
        deleteIt={() => deleteTask(task.id)}
        checkIt={(event) => checkThatDone(event, task.id)}
        checked={task.isDone}
      />
    })
  };

  return (
    <div className='background flex-row'>
      <div className="content-container">
        <AddTaskForm
          changeCurrentText={(event) => changeText(event)}
          value={currentText.text}
          addNewTask={() => addTask(currentText.text ? currentText.text : 'Задача...')} />
        {tasksList}
      </div>
    </div>
  );
};

export default App;