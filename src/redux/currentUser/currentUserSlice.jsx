import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    currentUser: {},
    token: JSON.parse(localStorage.getItem("token")) || "",
    isLoading: false,
    error: undefined,
    };

export const signupUser = createAsyncThunk('currentUser/signupUser', async (user) => {
    try {
        const response = await fetch('http://localhost:3001/signup', {
            method: "POST",
            body: JSON.stringify(user),
            headers: {
                "content-type": "application/json",
            }
        });
        localStorage.setItem("token", res.headers.get("Authorization"))
        const data = await response.json();
        return data;
    } catch (error) {
        throw new Error('Failed to signup user');
    }
}
);

export const loginUser = createAsyncThunk('currentUser/loginUser', async (user) => {
    try {
        const response = await fetch('http://localhost:3001/login', {
            method: "POST",
            body: JSON.stringify(user),
            headers: {
                "content-type": "application/json",
            }
        });
        localStorage.setItem("token", response.headers.get("Authorization"))
        const data = await response.json();
        return data;
    } catch (error) {
        throw new Error('Failed to login user');
    }
}
);

export const currentUserSlice = createSlice({
    name: 'currentUser',
    initialState,
    reducers: {
        logoutUser: (state) => {
            state.currentUser = {};
            state.token = "";
        }
    },
    extraReducers(builder) {
        builder.addCase(signupUser.pending, (state, action) => {
            state.isLoading = true;
        });
        builder.addCase(signupUser.fulfilled, (state, action) => {
            state.isLoading = false;
            state.currentUser = action.payload;
        });
        builder.addCase(signupUser.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error.message;
        });
        builder.addCase(loginUser.pending, (state, action) => {
            state.isLoading = true;
        });
        builder.addCase(loginUser.fulfilled, (state, action) => {
            state.isLoading = false;
            state.currentUser = action.payload;
        });
        builder.addCase(loginUser.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error.message;
        });
    }
    
});

export const { logoutUser } = currentUserSlice.actions;

export default currentUserSlice.reducer;




