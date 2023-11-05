import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Detail from "./pages/MovieDetail";
import Home from "./pages/Home";
import MovieCharacters from "./components/fragments/MovieDetail/MovieCharacters";
import MovieOverview from "./components/fragments/MovieDetail/MovieOverview";
import MovieReviews from "./components/fragments/MovieDetail/MovieReviews";

const App = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route index element={<Home />} />
      <Route path="movie/:movie_id" element={<Detail />}>
        <Route index element={<MovieOverview />} />
        <Route path="characters" element={<MovieCharacters />} />
        <Route path="reviews" element={<MovieReviews />} />
      </Route>
      <Route path="*" element={<h1>halaman tidak ditemukan</h1>} />
    </Route>
  )
);

export default App;
