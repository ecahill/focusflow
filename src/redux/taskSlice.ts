import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export type Task = {
    id: string
    title: string
    completed: boolean
}

type TaskState = {
    tasks: Task[]
    selectedIndex: number
}

const initialState: TaskState = {
    tasks: [],
    selectedIndex: 0,
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
        },
        setSelectedIndex: (state, action: PayloadAction<number>) => {
            if (action.payload >= 0 && action.payload < state.tasks.length) {
                state.selectedIndex = action.payload;
            }
        },
        moveSelectionUp: (state) => {
            if (state.selectedIndex > 0) {
                state.selectedIndex--;
            }
        },
        moveSelectionDown: (state) => {
            if (state.selectedIndex < state.tasks.length - 1) {
                state.selectedIndex++;
            }
        }
    }
})

export const { addTask, toggleTask, deleteTask, setSelectedIndex, moveSelectionUp, moveSelectionDown } = taskSlice.actions

export default taskSlice.reducer
