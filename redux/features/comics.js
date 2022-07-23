import { StarRate } from '@mui/icons-material';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const md5 = require('md5');
const ts = '1';
const apiKey = '10670300b2ae4393c57a1c85e45d5adb';
const privateKey = 'bed930700f23c5e78e0ce796e5e47fbf36740229';

const hash = md5(ts + privateKey + apiKey);

export const getComics = createAsyncThunk('comics/list', async () => {
  try {
    const response = await axios.get(
      `https://gateway.marvel.com:443/v1/public/comics?format=comic&characters=1009368&ts=${ts}&apikey=${apiKey}&hash=${hash}`
    );
    return response;
  } catch (err) {
    console.error(err);
  }
});

export const comicSlicer = createSlice({
  name: 'comics',
  initialState: {
    list: [],
    details: null,
    status: null,
  },
  reducers: {
    getComicDetails: (state, action) => {
      state.details = action.payload;
    },
  },
  extraReducers: {
    [getComics.pending]: (state) => {
      state.status = 'pending';
    },
    [getComics.fulfilled]: (state, action) => {
      state.status = 'success';
      state.list = action.payload.data.data;
    },
    [getComics.rejected]: (state) => {
      state.status = 'rejected';
    },
  },
});

export const { getComicDetails } = comicSlicer.actions;

export default comicSlicer.reducer;
