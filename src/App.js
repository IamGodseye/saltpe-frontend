import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import { UserContext, } from "./UserContext";
import { useState, useMemo } from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.min.js'

import Home from "./pages/home";
import Signup from "./pages/signup";
import Login from "./pages/login";
import AboutMe from "./pages/aboutMe";

function App() {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')) || null)
  const providerUser = useMemo(() => ({ user, setUser }), [user, setUser])
  return (
    <BrowserRouter>
      <UserContext.Provider value={providerUser}>

        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/home" element={<Home />} /> */}
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/about-me" element={<AboutMe />} />
        </Routes>
      </UserContext.Provider>

    </BrowserRouter>
  );
}

export default App;
