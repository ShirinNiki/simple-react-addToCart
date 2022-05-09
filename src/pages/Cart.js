import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { addToCart, removeFromCart } from "../action/cartAction";
import { Row, Col, Image, ListGroup, Button, Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

function Cart() {
  const dispatch = useDispatch();
  const productId = useParams().id;
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  console.log(cartItems);
  console.log(cartItems.length);
  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId));
    }
  }, [dispatch, productId]);
  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id));
  };
  return (
    <div>
      <Row className="mt-5">
        <Col md={8}>
          <h2>Cart</h2>
          {cartItems.length === 0 ? (
            <p>Cart is empty</p>
          ) : (
            <ListGroup variant="flush">
              {cartItems.map((item) => {
                return (
                  <ListGroup.Item key={item.product}>
                    <Row className="align-items-center">
                      <Col md={3}>
                        <Image src={item.image} alt={item.name} fluid rounded />
                      </Col>
                      <Col md={3}>{item.name}</Col>
                      <Col md={3}>{item.price}</Col>
                      <Col md={3}>
                        <Button
                          type="button"
                          variant="light"
                          onClick={() => {
                            removeFromCartHandler(item.product);
                          }}
                        >
                          <FontAwesomeIcon icon={faTrash} />
                        </Button>
                      </Col>
                    </Row>
                  </ListGroup.Item>
                );
              })}
            </ListGroup>
          )}
        </Col>
        <Col md={4}>
          <Card className="mt-3">
            <ListGroup variant="fllush">
              <ListGroup.Item>
                Total price:{" "}
                {cartItems.reduce((acc, item) => acc + item.price, 0)}
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default Cart;
