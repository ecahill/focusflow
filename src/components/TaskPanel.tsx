import React from 'react'
import '../index.css'

const TaskPanel: React.FC = () => {
    return (
        <div className="task-panel">
            <h2>Focus Blocks</h2>
            <ul>
                <li>Deep Work</li>
                <li>Break</li>
                <li>Admin</li>
                <li>Creative</li>
                <li>Transition</li>
            </ul>
        </div>
    )
}

export default TaskPanel