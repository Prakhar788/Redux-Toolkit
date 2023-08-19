import { createSlice } from "@reduxjs/toolkit";

const initialStateValue={name:"Prakhar",age:20,email:""}
export const userSlice=createSlice({
    name:"user",
    initialState:{value:initialStateValue},
    reducers:{
        login:(state,action)=>{
            state.value=action.payload;
        },
        logut:(state,action)=>{
            state.value=initialStateValue;
        },
    },
});

export const {login,logout}=userSlice.actions;
export default userSlice.reducer;