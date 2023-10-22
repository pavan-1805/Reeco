import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import constants from "../../constants";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import { Grid } from "@mui/material";

const Header = () => {
  const pages = ["Store", "Orders", "Analytics"];
  const name = "pavan";
  return (
    <>
      <Box>
        <AppBar
          id="app-bar"
          style={{ backgroundColor: "#0b6640" }}
          position="static"
        >
          <Toolbar>
            <Typography
              style={{ fontSize: "30px", fontWeight: "bold" }}
              variant="h6"
              component="div"
            >
              {constants.REECO}
            </Typography>
            <Grid
              xs={12}
              s={12}
              md={12}
              lg={12}
              style={{ display: "flex", width: "100%" }}
            >
              <Grid
                xs={6}
                s={6}
                md={6}
                lg={12}
                style={{ display: "flex", flexGrow: "1" }}
              >
                <Grid
                  style={{
                    width: "20rem",
                    display: "flex",
                    justifyContent: "space-evenly",
                  }}
                >
                  {pages.map((page) => (
                    <Button
                      key={page}
                      style={{ textTransform: "none" }}
                      color="inherit"
                    >
                      {page}
                    </Button>
                  ))}
                </Grid>
              </Grid>
              <Grid
                xs={6}
                s={6}
                md={6}
                lg={12}
                style={{
                  display: "flex",
                  width: "15rem",
                  justifyContent: "space-around",
                  marginTop: "5px",
                }}
              >
                <Grid>
                  <ShoppingCartOutlinedIcon
                    style={{ transform: "scaleX(-1)", cursor: "pointer" }}
                  />
                </Grid>
                <Grid style={{ display: "flex" }}>
                  <Typography>Hello, {name}</Typography>
                  <KeyboardArrowDownOutlinedIcon
                    style={{ cursor: "pointer" }}
                  />
                </Grid>
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

export default Header;
