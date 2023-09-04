import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import vtuService from "./vtuService";


const initialState = {
    mtn: {},
    airtel: {},
    glo: {},
    mobile: {},
    wallet: {},
    airtime: [],
    data: [],
    electricity: [],
    cable: [],
    isSuccess: false,
    message: ''
}

// mtn variation
export const getMtn = createAsyncThunk('getMtn', async (thunkAPI) => {
    try {
        return await vtuService.getMtn()
    }
    catch (error) {
        const message = (error.response && error.response.data && error.response.data.message)
            || error.message || error.toString()

        return thunkAPI.rejectWithValue(message)
    }
})

// airtel variation
export const getAirtel = createAsyncThunk('getAirtel', async (thunkAPI) => {
    try {
        return await vtuService.getAirtel()
    }
    catch (error) {
        const message = (error.response && error.response.data && error.response.data.message)
            || error.message || error.toString()

        return thunkAPI.rejectWithValue(message)
    }
})

//Glo Variation
export const getGlo = createAsyncThunk('getGlo', async (thunkAPI) => {
    try {
        return await vtuService.getGlo()
    }
    catch (error) {
        const message = (error.response && error.response.data && error.response.data.message)
            || error.message || error.toString()

        return thunkAPI.rejectWithValue(message)
    }
})

// Etisalat Variation
export const getMobile = createAsyncThunk('getMobile', async (thunkAPI) => {
    try {
        return await vtuService.getMobile()
    }
    catch (error) {
        const message = (error.response && error.response.data && error.response.data.message)
            || error.message || error.toString()

        return thunkAPI.rejectWithValue(message)
    }
})

// get wallet balance
export const getWallet = createAsyncThunk('getWallet', async (thunkAPI) => {
    try {
        return await vtuService.getWallet()
    }
    catch (error) {
        const message = (error.response && error.response.data && error.response.data.message)
            || error.message || error.toString()

        return thunkAPI.rejectWithValue(message)
    }
})
// get airtime categories
export const getAirtimeCategory = createAsyncThunk('getAirtimeCategory', async (thunkAPI) => {
    try {
        return await vtuService.getAirtimeCategory()
    }
    catch (error) {
        const message = (error.response && error.response.data && error.response.data.message)
            || error.message || error.toString()

        return thunkAPI.rejectWithValue(message)
    }
})

// get data category
export const getDataCategory = createAsyncThunk('getDataCategory', async (thunkAPI) => {
    try {
        return await vtuService.getDataCategory()
    }
    catch (error) {
        const message = (error.response && error.response.data && error.response.data.message)
            || error.message || error.toString()

        return thunkAPI.rejectWithValue(message)
    }
})

// get electricity category
export const getElectricityCategory = createAsyncThunk('getElectricityCategory', async (thunkAPI) => {
    try {
        return await vtuService.getElectricityCategory()
    }
    catch (error) {
        const message = (error.response && error.response.data && error.response.data.message)
            || error.message || error.toString()

        return thunkAPI.rejectWithValue(message)
    }
})

// get Tv category
export const getTvCategory = createAsyncThunk('getTvCategory', async (thunkAPI) => {
    try {
        return await vtuService.getTvCategory()
    }
    catch (error) {
        const message = (error.response && error.response.data && error.response.data.message)
            || error.message || error.toString()

        return thunkAPI.rejectWithValue(message)
    }
})

export const vtuSlice = createSlice({
    name: 'variations',
    initialState,
    reducers: {
        reset: (state) => initialState
    },
    extraReducers: (builder) => {
        builder
            .addCase(getMtn.pending, (state) => {
                state.isLoading = true
            })
            .addCase(getMtn.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.mtn = action.payload
            })
            .addCase(getMtn.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
                state.mtn = null
            })
            .addCase(getAirtel.pending, (state) => {
                state.isLoading = true
            })
            .addCase(getAirtel.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.airtel = action.payload
            })
            .addCase(getAirtel.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
                state.airtel = null
            })
            .addCase(getGlo.pending, (state) => {
                state.isLoading = true
            })
            .addCase(getGlo.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.glo = action.payload
            })
            .addCase(getGlo.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
                state.glo = null
            })
            .addCase(getMobile.pending, (state) => {
                state.isLoading = true
            })
            .addCase(getMobile.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.mobile = action.payload
            })
            .addCase(getMobile.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
                state.mobile = null
            })
            .addCase(getWallet.pending, (state) => {
                state.isLoading = true
            })
            .addCase(getWallet.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.wallet = action.payload
            })
            .addCase(getWallet.rejected, (state) => {
                state.wallet = null
            })
            .addCase(getAirtimeCategory.pending, (state) => {
                state.isLoading = true
            })
            .addCase(getAirtimeCategory.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.airtime = action.payload
            })
            .addCase(getAirtimeCategory.rejected, (state) => {
                state.airtime = null
            })
            .addCase(getDataCategory.pending, (state) => {
                state.isLoading = true
            })
            .addCase(getDataCategory.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.data = action.payload
            })
            .addCase(getDataCategory.rejected, (state) => {
                state.data = null
            })
            .addCase(getElectricityCategory.pending, (state) => {
                state.isLoading = true
            })
            .addCase(getElectricityCategory.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.electricity = action.payload
            })
            .addCase(getElectricityCategory.rejected, (state) => {
                state.electricity = null
            })
            .addCase(getTvCategory.pending, (state) => {
                state.isLoading = true
            })
            .addCase(getTvCategory.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.cable = action.payload
            })
            .addCase(getTvCategory.rejected, (state) => {
                state.cable = null
            })

    }
})

export const { reset } = vtuSlice.actions
export default vtuSlice.reducer
