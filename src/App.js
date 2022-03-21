import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import BookList from "./components/BookList";
import WarningSign from "./components/WarningSign";
import book from "./data/sciFi.json";
import { Component } from "react";
import { Col, Row } from "react-bootstrap";
import CommentArea from "./components/CommentArea";

class App extends Component {
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
      <div>
        <WarningSign message="welcome to the book store" />
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
      </div>
    );
  }
}

export default App;
