import { configureStore } from "@reduxjs/toolkit"
import rootReducer from "./rootReducer"

const store = configureStore({
    reducer: rootReducer,
    devTools: import.meta.env.MODE !== 'development'
})

export type RootState = ReturnType<typeof store.getState>

export default store
