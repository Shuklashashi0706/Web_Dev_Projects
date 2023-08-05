import { useEffect } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Home from "./screens/Home";
import Wallet from './screens/Wallet'
import Profile from './screens/Profile'
import About from './screens/About'
import Login from './screens/Login'
import Signup from './screens/Signup'

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Provider } from 'react-redux';
import store from "./store/store";
import { fetchUser } from "./store/actions/auth";
import setAuthToken from "./utils/setAuthToken";

if (localStorage.token) {
  setAuthToken(localStorage.token)
}

function App() {
  useEffect(() => {
    store.dispatch(fetchUser())
  }, [])

  return (
    <Provider store={store} >
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/Wallet" element={<Wallet />} />
          <Route exact path="/Profile" element={<Profile />} />
          <Route exact path="/About" element={<About />} />
          <Route exact path="/Login" element={<Login />} />
          <Route exact path="/Signup" element={<Signup />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
