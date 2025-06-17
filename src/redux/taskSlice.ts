import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type Task = {
    id: string
    title: string
    completed: boolean
}

type TaskState = {
    tasks: Task[]
}

const initialState: TaskState = {
    tasks: []
}

const taskSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        addTask: (state, action: PayloadAction<{ title: string }>) => {
            const newTask: Task = {
                id: crypto.randomUUID(),
                title: action.payload.title,
                completed: false
            }
            state.tasks.push(newTask)
        },
        toggleTask: (state, action: PayloadAction<{ id: string }>) => {
            const task = state.tasks.find(t => t.id === action.payload.id)
            if (task) task.completed =! task.completed
        },
        deleteTask: (state, action: PayloadAction<{ id: string }>) => {
            state.tasks = state.tasks.filter(t => t.id !== action.payload.id)
        }
    }
})

export const { addTask, toggleTask, deleteTask } = taskSlice.actions

export default taskSlice.reducer
