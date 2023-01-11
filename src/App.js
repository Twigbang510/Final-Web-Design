import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./components/HomePage/HomePage";
import ListPage from "./components/ListPage/ListPage";
import Login from "./components/LoginPage/Login";
import Register from "./components/RegisterPage/Register";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element = {<Register/>} />
        <Route path="/listPage" element={<ListPage />} />
      </Routes>
    </Router>
  );
}

export default App;
