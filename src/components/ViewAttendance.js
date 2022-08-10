import React from "react";
import Sidebar from "./Sidebar";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import { useState, useEffect } from "react";
const ViewAttendance = () => {
  const [users, setUsers] = useState([]);
  const [date, setDate] = useState("");
  // Here I'm posting Date and Getting data against that date
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ date: date }),
  };
  const fetchData = async () => {
    const response = await fetch(
      "http://localhost:8080/attendance/getPresent",
      requestOptions
    );
    const data = await response.json();
    setUsers(data);
  };
  // here I'm using useEffect to update data on changing the date
  useEffect(() => {
    fetchData();
  }, [date]);
  return (
    <Sidebar>
      {/*  // Here With this Component(<Sidebar) I'm getting Sidebar on this Page */}
      {/* Here user will enter date according to which he wants to see attendance  */}
      <div className="selectDate">
        <h1>Please Select a Date</h1>
        <input
          className="dateCalendar"
          type="date"
          // here date which user entered is going to set in setDate
          onChange={(event) => {
            setDate(event.target.value.toString());
          }}
        />
      </div>
      {/* {!date && <h1>Please Enter A Date</h1>} */}
      {/* {console.log(users)} */}
      {/* Here I'm Checking wether users.status is not empty */}
      {users.status !== "No Record Found" && (
        <div>
          <h1 className="heading">Present Students on {date}</h1>
          {/* Here I'm getting the data of present students and displaying data in table */}
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell align="center">
                    <strong>Student Names</strong>
                  </TableCell>
                </TableRow>
              </TableHead>
              {/* {console.log(users)} */}
              {/* Here I'm Checking users.presetstudents have data  */}
              {users.presentStudents && (
                <>
                  <TableBody>
                    {users?.presentStudents?.map((row) => (
                      <TableRow
                        key={row.id}
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                      >
                        <TableCell align="center" component="th" scope="row">
                          {row.fullname}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </>
              )}
            </Table>
          </TableContainer>
          <h1 className="heading">Absent Students on {date}</h1>
          {/* here is all for absent students data */}
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell align="center">
                    <strong>Student Names</strong>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {/* Here I'm Checking users.absentstudents have data  */}
                {users?.absentStudents?.map((row) => (
                  <TableRow
                    key={row.id}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell align="center" component="th" scope="row">
                      {row.fullname}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      )}
      {users.status === "No Record Found" && date && (
        <div style={{ margin: "2rem" }}>
          <h1>No Record Found</h1>
        </div>
      )}
    </Sidebar>
  );
};

export default ViewAttendance;
