import { createAsyncThunk, createEntityAdapter, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../config/redux/store";
import apiAxios from "../../lib/api";

interface MovieCategory {
	id: number,
	name: string
}

export const getMovieCategory = createAsyncThunk('getMovieCategory',async () => {
	const res = await apiAxios.get('/genre/movie/list?language=en').then(res => res.data)
	return res.genres
})

const movieCategoryEntity = createEntityAdapter<MovieCategory>({
	selectId: movieCategory => movieCategory.id
})

const movieCategorySlice = createSlice({
	name: 'category',
	initialState: movieCategoryEntity.getInitialState(),
	reducers: {},
	extraReducers(builder) {
		builder.addCase(getMovieCategory.fulfilled,(state, action: PayloadAction<MovieCategory[]>) => {
			movieCategoryEntity.setAll(state, action.payload)
		})
	},
})

export const movieCategorySelectors = movieCategoryEntity.getSelectors<RootState>(state => state.movieCategory)

export default movieCategorySlice.reducer;