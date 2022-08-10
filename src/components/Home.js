import React from "react";
import { Link } from "react-router-dom";
import Sidebar from "./Sidebar";
const Home = () => {
  return (
    <>
      <Sidebar>
        <div className="App flex-center" style={{ height: "100vh" }}>
          <h1>Welcome To Attendance Management System</h1>
        </div>
      </Sidebar>
    </>
  );
};

export default Home;
