import appleImg from "../../assets/Apple Green Smith.png";
import AvocadoImg from "../../assets/Avocado Hass.jpg";
const initialState = {
  products: [
    {
      productId: "product_1",
      productImage: appleImg,
      productName: "Green Apple",
      brand: "Hormel Black labelmany",
      price: "$70",
      quantity: "10",
      total: "$700.00",
      status: "",
      actions: "",
    },
    {
      productId: "product_2",
      productImage: AvocadoImg,
      productName: "Avocado Hass",
      brand: "Hormel Black labelmany",
      price: "$70",
      quantity: "10",
      total: "$700.00",
      status: "",
      actions: "",
    },
    {
      productId: "product_3",
      productImage: AvocadoImg,
      productName: "Avocado Hass",
      brand: "Hormel Black labelmany",
      price: "$70",
      quantity: "10",
      total: "$700.00",
      status: "",
      actions: "",
    },
    {
      productId: "product_4",
      productImage: appleImg,
      productName: "Green Apple",
      brand: "Hormel Black labelmany",
      price: "$70",
      quantity: "10",
      total: "$700.00",
      status: "",
      actions: "",
    },
    {
      productId: "product_5",
      productImage: AvocadoImg,
      productName: "Avocado Hass",
      brand: "Hormel Black labelmany",
      price: "$70",
      quantity: "10",
      total: "$700.00",
      status: "",
      actions: "",
    },
    {
      productId: "product_6",
      productImage: appleImg,
      productName: "Green Apple",
      brand: "Hormel Black labelmany",
      price: "$70",
      quantity: "10",
      total: "$700.00",
      status: "",
      actions: "",
    },
  ],
};

const tableReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "APPROVE_PRODUCT": {
      let data = state.products;
      let index = data.findIndex((object) => object.productId === payload);
      data[index].status = "Approved";
      return {
        ...state,
        products: [...data],
      };
    }
    case "MISSING_PRODUCT": {
      let data = state.products;
      let index = data.findIndex((object) => object.productId === payload);
      data[index].status = "Missing";
      return {
        ...state,
        products: [...data],
      };
    }
    case "MISSING_URGENT_PRODUCT": {
      let data = state.products;
      let index = data.findIndex((object) => object.productId === payload);
      data[index].status = "Missing-Urgent";
      return {
        ...state,
        products: [...data],
      };
    }
    default:
      return state;
  }
};

export default tableReducer;
