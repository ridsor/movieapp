import {
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
  PayloadAction,
} from "@reduxjs/toolkit";
import { RootState } from "../../config/redux/store";
import apiAxios from "../../lib/api";

interface Movie {
  id: number;
  img: string;
  title: string;
  genre_ids: number[];
}

interface State {
  page: number;
  category: string | number;
  loading?: boolean;
}

const movieEntity = createEntityAdapter<Movie>({
  selectId: (movie) => movie.id,
});

export const getMovies = createAsyncThunk(
  "getMovies",
  async ({
    destination = 1,
    category = "",
  }: {
    destination?: number;
    category?: number | string;
  }) => {
    const { results, page } = await apiAxios
      .get(`/discover/movie?page=${destination}&with_genres=${category}`)
      .then((res) => res.data)
      .catch((err) => console.error(err));

    return {
      results: results.map((item: any) => ({
        id: item.id,
        img: item.poster_path,
        title: item.title,
        genre_ids: item.genre_ids,
      })),
      page,
      category,
    };
  }
);

const movieSlice = createSlice({
  name: "movie",
  initialState: movieEntity.getInitialState<State>({
    page: 1,
    category: "",
    loading: true,
  }),
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getMovies.pending, (state) => {
        state.loading = true;
      })
      .addCase(
        getMovies.fulfilled,
        (state, action: PayloadAction<{ results: Movie[] } & State>) => {
          const { results, page, category } = action.payload;
          movieEntity.setAll(state, results);
          state.page = page;
          state.category = category;
          state.loading = false;
        }
      );
  },
});

export const movieSelectors = movieEntity.getSelectors<RootState>(
  (state) => state.movie
);

export default movieSlice.reducer;
