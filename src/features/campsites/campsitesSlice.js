import {createSlice, createAsyncThunk  } from '@reduxjs/toolkit'
// import { CAMPSITES } from "../../app/shared/CAMPSITES";
import { baseUrl } from '../../app/shared/baseUrl'
import { mapImageUrl } from '../../utils/mapImageURL'

export const fetchCampsites = createAsyncThunk(
  'campsite/fetchCampsites',
  async () => {
      const response = await fetch(baseUrl+'campsites')
      if (!response.ok){
        return Promise.reject('unable to fetch, status: ' + response.status)

      }
      const data = await response.json()
      return data
  }
)


const initialState = {
  campsitesArray: [],
  isLoading: true,
  errMsg:'',
}

const campsitesSlice = createSlice({
  name : 'campsites',
  initialState,
  reducers: {},
  extraReducers: {
   [fetchCampsites.pending]:(state)=> {
    state.isLoading = true
   }, 
   [fetchCampsites.fulfilled]: (state,action) =>{
    state.isLoading = false
    state.errMsg =''
    state.campsitesArray = mapImageUrl(action.payload)
   },
   [fetchCampsites.rejected]: (state,action) =>{
    state.isLoading =false
    state.errMsg = action.error? action.error.message:'fetch failed'
   }
  },
})

export const campsitesReducer = campsitesSlice.reducer

export const selectAllCampsites = (state) => {
  return state.campsites.campsitesArray;
};

export const selectCampsiteById = (id) => (state) =>{
  
  return state.campsites.campsitesArray.find(
    (campsite) => campsite.id === parseInt(id)
    )
}

export const selectFeaturedCampsite = (state) => {
  return {
    featuredItem: state.campsites.campsitesArray.find(
      (campsite) => campsite.featured
    ),
    isLoading: state.campsites.isLoading,
    errMsg: state.campsites.errMsg
  }
  };
