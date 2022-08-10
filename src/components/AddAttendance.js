import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import axios from "axios";
const AddAttendance = () => {
  let i = 0;
  const [users, setUsers] = useState([]);
  // #Fetching Data From API
  const fetchData = () => {
    fetch("http://localhost:8080/student/all")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setUsers(data);
      });
  };

  useEffect(() => {
    fetchData();
    // componentDidMount();
  }, []);
  const PresentData = [];
  function componentDidMount() {
    axios.post("http://localhost:8080/attendance/add", {
      s_id: PresentData,
      present: "yes",
    });
  }
  return (
    <div>
      {/*  // Here With this Component I'm getting Sidebar on this Page */}
      <Sidebar>
        <form>
          {/* Here I'm Creating Table in Which I'm Showing all data(Mechine Learning) and students names */}
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>
                    <strong>Student Names</strong>
                  </TableCell>
                  <TableCell align="center">
                    <strong>Mark Attendance </strong>
                  </TableCell>
                  <TableCell align="right">
                    <strong>Attendance Percentage</strong>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {/* Here I'm mapping the data from users [useState] */}
                {users?.allStudents?.map((row) => (
                  <TableRow
                    key={row.id}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {/* here i'm showing all names */}
                      {row.fullname}
                    </TableCell>
                    <TableCell align="center">
                      <input
                        type="checkbox"
                        value={Number(row.id)}
                        id={row.id}
                        name="id"
                        onChange={(event) => {
                          PresentData.push(Number(event.target.value));
                          console.log(PresentData);
                        }}
                      />
                    </TableCell>
                    <TableCell align="right">
                      {/* Here I'm Showing machineLearnig Data */}
                      {users?.machinelearning[i++]}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <div className="btnDiv">
            <button
              type="submit"
              onClick={(e) => {
                e.preventDefault();
                componentDidMount();
              }}
            >
              Save
            </button>
          </div>
        </form>
      </Sidebar>
    </div>
  );
};

export default AddAttendance;
