import { createSlice } from "@reduxjs/toolkit";

const initialValue = {
    _id : "",
    name : "",
    email : "",
    mobile : "",
    verify_email : "",
    last_login_date : "",
    address_details : [],
 
}

const userSlice  = createSlice({
    name : 'user',
    initialState : initialValue,
    reducers : {
        setUserDetails : (state,action) =>{
            state._id = action.payload?._id
            state.name  = action.payload?.name
            state.email = action.payload?.email
            
            state.mobile = action.payload?.mobile
            state.verify_email = action.payload?.verify_email
            state.last_login_date = action.payload?.last_login_date
            state.status = action.payload?.status
            state.address_details = action.payload?.address_details

            
        },
      
        logout : (state,action)=>{
            state._id = ""
            state.name  = ""
            state.email = ""
            state.mobile = ""
            state.verify_email = ""
            state.last_login_date = ""
           
            state.address_details = []
           
        },
    }
})

export const { setUserDetails, logout ,updatedAvatar} = userSlice.actions

export default userSlice.reducer