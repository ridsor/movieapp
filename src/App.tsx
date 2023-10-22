import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Home from "./pages/Home";
import MovieDetail from "./pages/Home/MovieDetail";

const App = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route index element={<Home />} />
      <Route path=":id" element={<MovieDetail />} />
      <Route path="*" element={<h1>halaman tidak ditemukan</h1>} />
    </Route>
  )
);

export default App;
