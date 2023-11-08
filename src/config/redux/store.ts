import { configureStore } from "@reduxjs/toolkit";
import movieCategoryReducer from "../../pages/Home/movieCategorySlice";
import movieReducer from "../../pages/Home/movieSlice";
// ...

const store = configureStore({
  reducer: {
    movie: movieReducer,
    movieCategory: movieCategoryReducer
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export default store;
