import React, { useEffect } from "react";
import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
import { productDetailAction } from "../action/productAction";
import { Row, Col, Image, ListGroup, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

function Product({ history }) {
  const params = useParams();
  //const history = useHistory();
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const productDetail = useSelector((state) => state.productDetail);
  const { loading, product } = productDetail;
  console.log(params);
  useEffect(() => {
    dispatch(productDetailAction(params.id));
  }, [dispatch, params]);
  const addToCartHandler = () => {
    navigate(`/cart/${params.id}`);
  };
  return (
    <div>
      <Row className="mt-5">
        <Link to="/">
          <Button variant="outline-secondary">Back to Home</Button>
        </Link>
      </Row>
      {loading ? (
        <h3>Loading....</h3>
      ) : (
        <Row>
          <Col md={6}>
            <Image src={product.image} fluid rounded />
          </Col>
          <Col md={3}>
            <ListGroup variant="flush">
              <ListGroup.Item as="h3">{product.name}</ListGroup.Item>
              <ListGroup.Item>{product.price}</ListGroup.Item>
              <ListGroup.Item>{product.description}</ListGroup.Item>
            </ListGroup>
          </Col>
          <Col md={3}>
            <Button
              className="m-auto"
              variant="primary"
              size="lg"
              onClick={addToCartHandler}
            >
              Add to card
            </Button>
          </Col>
        </Row>
      )}
    </div>
  );
}

export default Product;
