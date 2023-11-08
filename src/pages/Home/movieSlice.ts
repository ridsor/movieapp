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
  search: string
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
    search=""
  }: {
    destination?: number;
    category?: number | string;
    search?: string;
  }) => {
    let results: [];
    let page: number;

    if(search) {
      ({ results, page } = await apiAxios
        .get(`search/movie?query=${search}&page=${destination}`)
        .then((res) => res.data)
        .catch((err) => console.error(err)));

    } else {
      ({ results, page } = await apiAxios
        .get(`/discover/movie?page=${destination}&with_genres=${category}`)
        .then((res) => res.data)
        .catch((err) => console.error(err)));
    }


    return {
      results: results.map((item: any) => ({
        id: item.id,
        img: item.poster_path,
        title: item.title,
        genre_ids: item.genre_ids,
      })),
      page,
      category,
      search
    };
  }
);

const movieSlice = createSlice({
  name: "movie",
  initialState: movieEntity.getInitialState<State>({
    page: 1,
    category: "",
    search: "",
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
          const { results, page, category, search } = action.payload;
          movieEntity.setAll(state, results);
          state.page = page;
          state.category = category;
          state.search = search
          state.loading = false;
        }
      );
  },
});

export const movieSelectors = movieEntity.getSelectors<RootState>(
  (state) => state.movie
);

export default movieSlice.reducer;
