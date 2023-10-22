import React from "react";
import { Grid, Table as MuiTable } from "@mui/material";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import DoneOutlinedIcon from "@mui/icons-material/DoneOutlined";
import Chip from "./Chip";

const Table = (props) => {
  return (
    <TableContainer component={Paper}>
      <MuiTable sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell></TableCell>
            {props.headers.map((header) => (
              <TableCell key={header.id} style={{ fontWeight: "bold" }}>
                {header.value}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {props.rows.map((row) => (
            <TableRow
              key={row.productId}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell>
                <img
                  src={`${row.productImage}`}
                  alt="image"
                  width="70px"
                  height="70px"
                />
              </TableCell>
              <TableCell>{row.productName}</TableCell>
              <TableCell>{row.brand}</TableCell>
              <TableCell>{row.price}</TableCell>
              <TableCell>{row.quantity}</TableCell>
              <TableCell>{row.total}</TableCell>
              <TableCell>
                {row.status && (
                  <Chip
                    label={row.status}
                    backgroundColor={row.status}
                    variant="contained"
                  />
                )}
              </TableCell>
              <TableCell>
                <Grid
                  style={{
                    display: "flex",
                    width: "100%",
                    justifyContent: "space-around",
                  }}
                >
                  <CloseOutlinedIcon
                    onClick={() =>
                      props.handleMissing(row.productId, row.productName)
                    }
                    style={{
                      cursor: "pointer",
                      color: ["Missing", "Missing-Urgent"].includes(row.status)
                        ? "red"
                        : "gray",
                    }}
                  />
                  <DoneOutlinedIcon
                    onClick={() =>
                      props.handleApprove(row.productId, row.productName)
                    }
                    style={{
                      cursor: "pointer",
                      color: row.status === "Approved" ? "green" : "gray",
                    }}
                  />
                  <span
                    style={{ cursor: "pointer", marginTop: "3px" }}
                    onClick={() => alert("Edit clicked")}
                  >
                    Edit
                  </span>
                </Grid>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </MuiTable>
    </TableContainer>
  );
};

export default Table;
