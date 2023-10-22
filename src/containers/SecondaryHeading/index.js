import { Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import Button from "../../commonComponents/Button";

const SecondaryHeading = () => {
  const [orderId, setOrderId] = useState("32457ABC");
  useEffect(() => {
    setOrderId("32457ABC");
  }, []);

  const backClickHandler = () => {
    alert("clicked");
  };
  const approveOrderClickHandler = () => {
    alert("clicked");
  };

  return (
    <Grid
      style={{
        height: "auto",
        backgroundColor: "#ffffff",
        boxShadow: "0px 0px 5px #bbbdbc",
      }}
    >
      <Grid
        id="order-tracking"
        style={{ display: "flex", padding: "15px 10px 10px" }}
      >
        <Typography>{"Orders"}</Typography>
        <ArrowForwardIosSharpIcon
          style={{ fontSize: "15px", marginTop: "5px" }}
        />
        <Typography>
          {`Order`} <a href="#" style={{ color: "#000000" }}>{`${orderId}`}</a>
        </Typography>
      </Grid>
      <Grid id="order-id" style={{ display: "flex", padding: "0px 10px 5px" }}>
        <Grid style={{ display: "flex", flexGrow: 1 }}>
          <Typography style={{ fontWeight: "bold", fontSize: "20px" }}>
            {"Order"}
          </Typography>
          <Typography
            style={{ fontWeight: "bold", fontSize: "20px", marginLeft: "10px" }}
          >
            {orderId}
          </Typography>
        </Grid>
        <Grid
          style={{
            display: "flex",
            width: "18rem",
            justifyContent: "space-around",
          }}
        >
          <Button variant="outlined" label="Back" onClick={backClickHandler} />
          <Button
            variant="contained"
            label="Approve order"
            size={"large"}
            onClick={approveOrderClickHandler}
          />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default SecondaryHeading;
