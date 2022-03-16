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
        <Row>
          <Col>
            <Form inline className="d-flex justify-content-center p-3">
              <FormControl
                type="text"
                value={this.state.searchQuery}
                placeholder="Search"
                className="mr-sm-2 w-50 p-4 m-3 text-"
                onChange={(e) =>
                  this.setState({
                    searchQuery: e.target.value,
                  })
                }
              />
            </Form>
          </Col>
        </Row>

        <Row>
          {this.props.data
            .filter((b) =>
              b.title.toLowerCase().includes(this.state.searchQuery)
            )
            .map((book, i) => (
              <Col>
                <SingleBook
                  img={book.img}
                  title={book.title}
                  price={book.price}
                  key={i}
                />
              </Col>
            ))}
        </Row>
      </Container>
    );
  }
}

export default BookList;
