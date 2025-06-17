import { configureStore } from '@reduxjs/toolkit'
import focusReducer from './focusSlice'
import taskReducer from './taskSlice'

export const store = configureStore({
    reducer: {
        focus: focusReducer,
        tasks: taskReducer,
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch