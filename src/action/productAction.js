import axios from "axios";
export const productListAction = () => async (dispatach) => {
  try {
    dispatach({ type: "PRODUCT_LIST_REQUEST" });
    const { data } = await axios.get("http://localhost:8000/api/products");
    dispatach({
      type: "PRODUCT_LIST_SUCCESS",
      payload: data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const productDetailAction = (id) => async (dispatach) => {
  try {
    dispatach({ type: "PRODUCT_DETAIL_REQUEST" });
    const { data } = await axios.get(
      `http://localhost:8000/api/products/${id}`
    );
    dispatach({
      type: "PRODUCT_DETAIL_SUCCESS",
      payload: data,
    });
  } catch (error) {
    console.log(error);
  }
};
