import React from "react";
import { Chip as MuiChip } from "@mui/material";
const Chip = (props) => {
  console.log("props:", props);
  return (
    <MuiChip
      variant={props.variant}
      label={props.label}
      style={{
        backgroundColor:
          props.backgroundColor === "Approved"
            ? "#56e38f"
            : props.backgroundColor === "Missing"
            ? "#e67a45"
            : props.backgroundColor === "Missing-Urgent"
            ? "#cf3232"
            : "gray",
        color: "white",
      }}
    ></MuiChip>
  );
};

export default Chip;
