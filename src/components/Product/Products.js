import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

function Products({ product }) {
  return (
    <Card className="my-3 p-3 rounded">
      <Link to={`/product/${product._id}`}>
        <Card.Img src={product.image} variant="top" />
      </Link>
      <Card.Body>
        <Link to={`/product/${product._id}`}>
          <Card.Title as="div">{product.name}</Card.Title>
        </Link>
      </Card.Body>
      <Card.Text>{product.price}</Card.Text>
    </Card>
  );
}

export default Products;
