import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem, deleteItem, clearAll } from './slices/ListSlice';
import { FaTrash, FaPlus, FaBroom } from 'react-icons/fa';
import './ToDo.css'; 

function ToDo() {
    const [newTask, setNewTask] = useState('');
    const dispatch = useDispatch();
    const tasks = useSelector((state) => state.list.items);

    const AddTask = () => {
        if (newTask.trim() !== '') {
            dispatch(addItem(newTask));
            setNewTask('');
        }
    };

    const DeleteTask = (index) => dispatch(deleteItem(index));
    const ClearAll = () => dispatch(clearAll());

    return (
        <div className="todo-container">
            <h1 className="todo-title">📋 To-Do List</h1>
            <div className="input-group">
                <input
                    type="text"
                    placeholder="Add a task"
                    value={newTask}
                    onChange={(e) => setNewTask(e.target.value)}
                />
                <button className="add-btn" onClick={AddTask}>
                    <FaPlus />
                </button>
            </div>

            <div className="task-list">
                {tasks.map((task, index) => (
                    <div className="task-card" key={index}>
                      
                        <span>{task}</span>
                        <button className="delete-btn" onClick={() => DeleteTask(index)}>
                            <FaTrash />
                        </button>
                    </div>
                ))}
            </div>

            {tasks.length > 0 && (
                <button className="clear-btn" onClick={ClearAll}>
                    <FaBroom /> Clear All
                </button>
            )}
        </div>
    );
}

export default ToDo;
