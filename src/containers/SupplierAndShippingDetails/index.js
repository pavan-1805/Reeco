import React from "react";
import data from "./data.json";
import { Grid, Typography } from "@mui/material";

const SupplierAndShipping = () => {
  let supplierData = data;
  return (
    <Grid
      id="supplier-shipping"
      style={{ display: "flex", justifyContent: "center" }}
    >
      <Grid
        id="inner-supplier-shipping"
        style={{
          height: "auto",
          width: "90%",
          border: "1px solid #e1e6e3",
          margin: "20px",
          borderRadius: "5px",
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        {supplierData.map((data, index) => (
          <Grid style={{ width: "200px", padding: "30px 0px 30px 0px" }}>
            {data.type === "text" ? (
              <Grid style={{ display: "flex" }}>
                {index !== 0 && (
                  <div
                    style={{
                      borderLeft: "2px solid #e1e6e3",
                      height: "65px",
                      margin: "10px",
                    }}
                  ></div>
                )}
                <Grid style={{ padding: "10px 0px", marginLeft: "30px" }}>
                  <Typography>{data.text1}</Typography>
                  <Typography style={{ fontWeight: "bold" }}>
                    {data.text2}
                  </Typography>
                </Grid>
              </Grid>
            ) : (
              <Grid style={{ display: "flex" }}>
                <div
                  style={{
                    borderLeft: "2px solid #e1e6e3",
                    height: "65px",
                    margin: "10px",
                  }}
                ></div>
                <Grid style={{ padding: "10px 0px", marginLeft: "30px" }}>
                  <Typography>{data.text1}</Typography>
                </Grid>
              </Grid>
            )}
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};

export default SupplierAndShipping;
