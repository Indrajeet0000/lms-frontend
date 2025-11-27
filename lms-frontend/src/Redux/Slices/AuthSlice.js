import { createSlice } from "@reduxjs/toolkit";
// import { data } from "react-router-dom";

const initialState={
    isLoggedIn:localStorage.getItem('isloggedIn')|| false,
    role:localStorage.getItem('role')|| "",
    data: localStorage . getItem('data') || {}

};

const authSlice= createSlice({
    name:'auth',
    initialState,
    reducers:{},
})

export default authSlice.reducer