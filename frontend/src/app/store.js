import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice'
import vtuReducer from '../features/vtu/vtuSlice';
// import ticketReducer from '../features/ticket/ticketSlice'


export const store = configureStore({
    reducer: {
        auth: authReducer,
        variations: vtuReducer
    }
});
