import { createSlice } from '@reduxjs/toolkit';

import { RootState } from '.';

interface IState {
    isDarkMode: boolean
};

const initState: IState  = {
    isDarkMode : false,

};

const appSlice = createSlice({
    name: 'app',
    initialState: initState,
    reducers: {
        toogleThemeMode: (state) => {
            state.isDarkMode = !state.isDarkMode;
        }
    },

});

export const {
    toogleThemeMode
} = appSlice.actions;

export const selectApp = (state: RootState) => state.app;

export default appSlice.reducer;