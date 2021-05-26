import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { ERROR } from '../../constants';
import { request } from '../../utils';

export const getStationsThunk = createAsyncThunk(
  'subway/getStationsThunk',
  async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;

    try {
      const response = await request.get('/stations');

      return { stations: response.data };
    } catch (error) {
      console.error(error);

      return rejectWithValue({ error: ERROR.UNKNOWN });
    }
  }
);

export const addStationThunk = createAsyncThunk(
  'subway/addStationThunk',
  async ({ params }, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;

    try {
      const response = await request.post('/stations', params);

      return { station: response.data };
    } catch (error) {
      console.error(error);

      return rejectWithValue({ error: ERROR.UNKNOWN });
    }
  }
);

export const deleteStationThunk = createAsyncThunk(
  'subway/deleteStationThunk',
  async ({ id }, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;

    try {
      await request.delete(`/stations/${id}`);

      return { stationId: id };
    } catch (error) {
      console.error(error);

      return rejectWithValue({ error: ERROR.UNKNOWN });
    }
  }
);

export const addLineThunk = createAsyncThunk(
  'subway/addLineThunk',
  async ({ params }, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;

    try {
      const response = await request.post('/lines', params);

      return { line: response.data };
    } catch (error) {
      console.error(error);

      return rejectWithValue({ error: ERROR.UNKNOWN });
    }
  }
);

export const deleteLineThunk = createAsyncThunk(
  'subway/deleteLineThunk',
  async ({ id }, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;

    try {
      await request.delete(`/lines/${id}`);

      return { lineId: id };
    } catch (error) {
      console.error(error);

      return rejectWithValue({ error: ERROR.UNKNOWN });
    }
  }
);

const subwaySlice = createSlice({
  name: 'subway',
  initialState: {
    stations: [],
    lines: [],
    error: null, //TODO: 사용자에게 에러 보여줄 방법 고민하기
  },
  reducers: {},
  extraReducers: {
    [getStationsThunk.fulfilled]: (state, { payload: { stations } }) => {
      state.stations = stations;
    },
    [getStationsThunk.rejected]: (state, { payload: { error } }) => {
      state.error = error;
    },

    [addStationThunk.fulfilled]: (state, { payload: { station } }) => {
      state.stations.push(station);
    },
    [addStationThunk.rejected]: (state, { payload: { error } }) => {
      state.error = error;
    },

    [deleteStationThunk.fulfilled]: (state, { payload: { stationId } }) => {
      state.stations = state.stations.filter(({ id }) => id !== stationId);
    },
    [deleteStationThunk.rejected]: (state, { payload: { error } }) => {
      state.error = error;
    },

    [addLineThunk.fulfilled]: (state, { payload: { line } }) => {
      state.lines.push(line);
    },
    [addLineThunk.rejected]: (state, { payload: { error } }) => {
      state.error = error;
    },

    [deleteLineThunk.fulfilled]: (state, { payload: { lineId } }) => {
      state.lines = state.lines.filter(({ id }) => id !== lineId);
    },
    [deleteLineThunk.rejected]: (state, { payload: { error } }) => {
      state.error = error;
    },
  },
});

const subwayReducer = subwaySlice.reducer;

export default subwayReducer;