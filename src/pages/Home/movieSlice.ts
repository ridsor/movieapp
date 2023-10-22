import { createAsyncThunk, createEntityAdapter, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../config/redux/store";
import apiAxios from "../../lib/api";

interface Movie {
	id: number
	img: string
	title: string
	genre_ids: number[]
}

interface State {
	page: number,
	total_pages: number,
	total_results: number,
	loading?: boolean
}

const movieEntity = createEntityAdapter<Movie>({
	selectId: (movie) => movie.id
})

export const getMovies = createAsyncThunk('getMovies', async () => {
	const {results, page, total_pages, total_results} = await apiAxios.get('/discover/movie').then(res => res.data).catch(err => console.error(err))

	return {
		results: results.map((item:any) => ({
			id: item.id,
			img: item.backdrop_path,
			title: item.title,
			genre_ids: item.genre_ids
		})),
		page,
		total_pages,
		total_results
	}
})

const movieSlice = createSlice({
	name: 'movie',
	initialState: movieEntity.getInitialState<State>({
		page: 1,
		total_pages: 1,
		total_results: 1,
		loading: true
	}),
	reducers: {},
	extraReducers(builder) {
		builder.addCase(getMovies.fulfilled,(state, action:PayloadAction<{results: Movie[]} & State>)=>{
			const {results, page, total_pages, total_results} = action.payload
			movieEntity.setAll(state, results)
			state.page = page
			state.total_pages = total_pages
			state.total_results = total_results
			state.loading = false;
		})
	},
})

export const movieSelectors = movieEntity.getSelectors<RootState>(state => state.movie)

export default movieSlice.reducer;