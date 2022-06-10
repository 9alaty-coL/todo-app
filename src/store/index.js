import taskSlice from "./task-slice"
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
    reducer: {
        tasks: taskSlice.reducer,
    }
})

export default store
