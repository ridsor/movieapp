import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Detail from "./pages/Detail";
import Home from "./pages/Home";

const App = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route index element={<Home />} />
      <Route path=":movie" element={<Detail />} />
      <Route path="*" element={<h1>halaman tidak ditemukan</h1>} />
    </Route>
  )
);

export default App;
