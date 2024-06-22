import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";
import { Landing } from "./pages/Landing";
import { Home } from "./pages/Home";
import { Auth } from "./pages/Auth";
import Details from "./pages/Details";
import { Navbar } from "./components/Navbar";
import ListenerChat from "./pages/ListenerChat";
import EDiary from "./pages/EDiary";
import Helplines from "./pages/Helplines";
import Community from "./pages/Community";

function App() {
  return (
    <div className="App">
      <Router>
        {/* <Navbar /> */}
        <Routes>
          <Route path="/auth" element={<Auth />} />
          {/* <Route path="/details" element={<Details />} /> */}
          <Route
            element={
              <>
                <Navbar />
                <Outlet />
              </>
            }
          >
            <Route path="/" element={<Landing />} />
            <Route path="/home" element={<Home />} />
            <Route path="/ediary" element={<EDiary />} />
          </Route>
          <Route path="/chat" element={<ListenerChat />} />
          <Route path="/helplines" element={<Helplines />} />
          <Route path="/community" element={<Community />} />
          <Route path="/details" element={<Details />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
