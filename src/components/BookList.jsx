import React, { useState } from "react";
import SingleBook from "./SingleBook";
import { Container, Row, Col, Form, FormControl } from "react-bootstrap";

const BookList = ({ selectedBook, changeBook, data }) => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <Container>
      <Form inline className="d-flex justify-content-center p-3">
        <FormControl
          type="text"
          value={searchQuery}
          placeholder="Search"
          className="mr-sm-2 w-50 p-4 m-3 text-"
          onChange={(event) => setSearchQuery(event.target.value)}
        />
      </Form>
      <Row>
        {data
          .filter((book) =>
            book.title.toLowerCase().includes(searchQuery.toLowerCase())
          )
          .map((book) => (
            <Col key={book.asin} md={4} lg={3}>
              <SingleBook
                img={book.img}
                title={book.title}
                price={book.price}
                asin={selectedBook}
                changeBook={() => changeBook(book.asin)}
                selectedBook={selectedBook}
              />
            </Col>
          ))}
      </Row>
    </Container>
  );
};

export default BookList;
