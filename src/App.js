import Login from "./components/Login";
import SignUp from "./components/SignUp";
import ViewAttendance from "./components/ViewAttendance";
import AddAttendance from "./components/AddAttendance";
import MyDropzone from "./components/FileDrop";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/AddAttendance" element={<AddAttendance />} />
          <Route path="/ViewAttendance" element={<ViewAttendance />} />
          <Route path="/FileDrop" element={<MyDropzone />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
