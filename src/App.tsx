import Home from "./components/Home";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Details from "./components/Details";
import Interceptor from "./components/Interceptor";
import { useSelector } from "react-redux";
import { RootState } from "./stores/store";

function App() {
  const username = useSelector((state: RootState) => state.store.username);
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/login" Component={Login}></Route>
          {username && (
            <>
              <Route path="/home" Component={Home}></Route>
              <Route path="/home/:id" Component={Details}></Route>
            </>
          )}
          
          <Route path="/*" Component={() => <Navigate to="/login" />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
