import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

type FocusState = {
    currentPanel: 'tasks' | 'notes' | 'timer'
}

const initialState: FocusState = {
    currentPanel: 'tasks',
}

const focusSlice = createSlice({
    name: 'focus',
    initialState,
    reducers: {
        setPanel: (state, action: PayloadAction<FocusState['currentPanel']>) => {
            state.currentPanel = action.payload
        },
    },
})

export const { setPanel } = focusSlice.actions
export default focusSlice.reducer