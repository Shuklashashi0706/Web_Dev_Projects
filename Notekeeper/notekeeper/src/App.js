import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header"
import Main from "./screens/Main"
function App() {
  return (
    <>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route exact path="/" element={<Main/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
