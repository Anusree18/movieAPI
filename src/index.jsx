import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import App from "./App";
import Reg from "./Components/Reg";


const root = ReactDOM.createRoot(
  document.getElementById("root")
);
root.render(
  <BrowserRouter>
  <Routes>
    <Route exact path="/" element={<Reg/>}></Route>
    <Route exact path="movies" element={<App/>}></Route>
  </Routes>
   
  </BrowserRouter>
);