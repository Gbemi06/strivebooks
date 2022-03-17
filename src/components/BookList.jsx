import React, { Component } from "react";
import SingleBook from "./SingleBook";
import { Container, Row, Col, Form, FormControl } from "react-bootstrap";

class BookList extends Component {
  state = {
    searchQuery: "",
  };
  render() {
    return (
      <Container>
        <Form inline className="d-flex justify-content-center p-3">
          <FormControl
            type="text"
            value={this.state.searchQuery}
            placeholder="Search"
            className="mr-sm-2 w-50 p-4 m-3 text-"
            onChange={(event) =>
              this.setState({
                searchQuery: event.target.value,
              })
            }
          />
        </Form>
        <Row>
          {this.props.data
            .filter((book) =>
              book.title
                .toLowerCase()
                .includes(this.state.searchQuery.toLowerCase())
            )
            .map((book) => (
              <Col key={book.asin} md={4} lg={3}>
                <SingleBook
                  img={book.img}
                  title={book.title}
                  price={book.price}
                  asin={book.asin}
                />
              </Col>
            ))}
        </Row>
      </Container>
    );
  }
}

export default BookList;
