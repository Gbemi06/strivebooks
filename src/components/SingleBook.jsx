import { Component } from "react";
import { Card, Button } from "react-bootstrap";
import MyBadge from "./MyBadge";

class SingleBook extends Component {
  state = {
    selectedBook: false,
  };
  render() {
    return (
      <>
        <Card
          onClick={() =>
            this.setState({ selectedBook: !this.state.selectedBook })
          }
          style={{ border: this.state.selectedBook ? "2px solid red" : "none" }}
        >
          <MyBadge
            color="black"
            bgColor="yellow"
            text="New"
            padding={8}
            position="absolute"
          />
          <Card.Img variant="top" src={this.props.img} />

          <Card.Body>
            <Card.Title>{this.props.title}</Card.Title>
            <Button variant="primary">{this.props.price}</Button>
          </Card.Body>
        </Card>
      </>
    );
  }
}

export default SingleBook;
