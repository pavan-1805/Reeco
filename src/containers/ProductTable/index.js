import { Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import Button from "../../commonComponents/Button";
import LocalPrintshopOutlinedIcon from "@mui/icons-material/LocalPrintshopOutlined";
import SerachField from "../../commonComponents/SerachField";
import { useDispatch, useSelector } from "react-redux";
import Table from "../../commonComponents/Table";
import appleImg from "../../assets/Apple Green Smith.png";
import {
  approveProduct,
  missingProduct,
  missingUrgentProduct,
} from "../../redux/actions";
import DialogPopUp from "../../commonComponents/DialogPopUp";
const productTableHeaders = [
  {
    id: "productName",
    value: "Product Name",
  },
  {
    id: "brand",
    value: "Brand",
  },
  {
    id: "price",
    value: "Price",
  },
  {
    id: "quantity",
    value: "Quantity",
  },
  {
    id: "total",
    value: "Total",
  },
  {
    id: "status",
    value: "Status",
  },
  {
    id: "action",
    value: "Actions",
  },
];

const ProductTable = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => ({
    products: state.tableReducer.products,
  }));
  console.log("products:", products);
  const [first, setfirst] = useState([]);
  const [openDialog, setOpenDialog] = useState(false);
  const [missingProductIdandName, setMissingProductIdandName] = useState("");

  const handleApprove = (productId) => {
    dispatch(approveProduct(productId));
    setfirst([]);
  };

  const handleMissing = (productId, productName) => {
    setMissingProductIdandName({ productId, productName });
    setOpenDialog(true);
  };
  const handleClose = () => {
    setOpenDialog(false);
  };
  const handleYes = () => {
    setOpenDialog(false);
    dispatch(missingUrgentProduct(missingProductIdandName.productId));
    console.log("handleYes:", missingProductIdandName.productId);
  };
  const handleNo = () => {
    console.log("handleNo:", missingProductIdandName.productId);
    setOpenDialog(false);
    dispatch(missingProduct(missingProductIdandName.productId));
  };

  return (
    <>
      <Grid
        id="product-table"
        style={{ display: "flex", justifyContent: "center" }}
      >
        <Grid
          id="inner-product-table"
          style={{
            height: "auto",
            width: "90%",
            border: "1px solid #e1e6e3",
            margin: "20px",
            borderRadius: "5px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
          }}
        >
          <Grid style={{ margin: "20px", display: "flex", width: "100%" }}>
            <Grid style={{ flexGrow: 1 }}>
              <SerachField placeholder={"search..."} onChange={() => {}} />
            </Grid>
            <Grid
              style={{
                display: "flex",
                width: "20rem",
                justifyContent: "space-around",
              }}
            >
              <Grid>
                <Button
                  label={"Add ietm"}
                  variant={"outlined"}
                  size={"large"}
                  onClick={() => handleApprove("product_1")}
                />
              </Grid>
              <Grid>
                <LocalPrintshopOutlinedIcon
                  style={{ color: "#0b6640", margin: "5px" }}
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid id="tabel">
            <Table
              headers={productTableHeaders}
              rows={products}
              handleApprove={handleApprove}
              handleMissing={handleMissing}
            />
          </Grid>
        </Grid>
      </Grid>
      <DialogPopUp
        open={openDialog}
        handleClose={handleClose}
        handleYes={handleYes}
        handleNo={handleNo}
        DialogTitle={"Missing Product"}
        DialogContent={`Is ${missingProductIdandName.productName}, urgent?`}
      />
    </>
  );
};

export default ProductTable;
