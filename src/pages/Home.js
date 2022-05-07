// import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Col, Row } from "react-bootstrap";
import Products from "../components/Product/Products";
import { productListAction } from "../action/productAction";

function Home() {
  const dispatach = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { loading, products } = productList;
  console.log("here3");

  useEffect(() => {
    dispatach(productListAction());
    console.log("here4");
  }, [dispatach]);
  return (
    <div>
      <h2>Products</h2>
      {loading ? (
        <h2>Loading....</h2>
      ) : (
        <Row>
          {products.map((item) => {
            return (
              <Col key={item._id} sm={12} md={6} lg={4}>
                <Products product={item} />
              </Col>
            );
          })}
        </Row>
      )}
    </div>
  );
}

export default Home;
