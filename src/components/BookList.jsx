import React from "react";
import SingleBook from "./SingleBook";
import { Container, Row, Col } from "react-bootstrap";

const BookList = (data) => {
  return (
    <Container>
      <Row>
        {data.data.map((book, i) => (
          <Col>
            <SingleBook
              img={book.img}
              title={book.titke}
              price={book.price}
              key={i}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default BookList;
