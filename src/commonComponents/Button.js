import React from "react";
import { Button as MuiButton } from "@mui/material";

const Button = (props) => {
  return (
    <MuiButton
      style={
        props.variant === "outlined"
          ? {
              border: "1px solid #0b6640",
              color: "#0b6640",
              borderRadius: "20px",
              width: props.size === "large" ? "150px" : "80px",
              height: "35px",
              textTransform: "none",
              fontWeight: "bold",
            }
          : props.variant === "contained"
          ? {
              backgroundColor: "#0b6640",
              color: "#ffffff",
              borderRadius: "20px",
              width: props.size === "large" ? "150px" : "80px",
              height: "35px",
              textTransform: "none",
              fontWeight: "bold",
            }
          : {}
      }
      onClick={props.onClick}
    >
      {props.label}
    </MuiButton>
  );
};

export default Button;
