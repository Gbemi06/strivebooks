import { Component } from "react";
import { Row, Col } from "react-bootstrap";
import CommentArea from "./CommentArea";
import BookList from "./BookList";
import book from "../data/sciFi.json";

class HomePage extends Component {
  state = {
    selectedBook: "1940026091",
  };

  changeBook = (chosenBook) => {
    this.setState({
      selectedBook: chosenBook,
    });
  };
  render() {
    return (
      <Row>
        <Col md={9}>
          <BookList
            data={book}
            changeBook={this.changeBook}
            selectedBook={this.state.selectedBook}
          />
        </Col>
        <Col md={3}>
          <CommentArea asin={this.state.selectedBook} />
        </Col>
      </Row>
    );
  }
}

export default HomePage;
