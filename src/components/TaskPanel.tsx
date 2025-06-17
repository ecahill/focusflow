import React, { useEffect, useState } from 'react'
import './TaskPanel.css'
import { useSelector, useDispatch } from 'react-redux'
import type { RootState } from '../redux/store'
import { toggleTask, addTask, deleteTask, moveSelectionUp, moveSelectionDown } from '../redux/taskSlice'

const TaskPanel: React.FC = () => {
    const tasks = useSelector((state: RootState) => state.tasks.tasks)
    const selectedIndex = useSelector((state: RootState) => state.tasks.selectedIndex);
    const dispatch = useDispatch()

    const [title, setTitle] = useState("")

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        if (title.trim()) {
            dispatch(addTask({ title }))
            setTitle("")
        }
    }

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'ArrowUp') {
                dispatch(moveSelectionUp());
            } else if (e.key === 'ArrowDown') {
                dispatch(moveSelectionDown());
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [dispatch]);

    return (
        <div className="task-panel">
            <h2>Focus Blocks</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Add a task"
                    />
                    <button type="submit">Add</button>
            </form>
            <ul>
                {tasks.map((task, index) => (
                    <li key={task.id}
                    className={index === selectedIndex ? 'selected' : ''}>
                    <input
                        type="checkbox" autoFocus
                        checked={task.completed}
                        onChange={() => dispatch(toggleTask({ id: task.id }))}
                        />
                        {task.title}
                        </li>
                ))}
            </ul>
        </div>
    )
}

export default TaskPanel