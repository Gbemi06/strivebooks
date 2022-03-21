import { Component } from "react";
import { Card, Button } from "react-bootstrap";
import CommentArea from "./CommentArea";
import MyBadge from "./MyBadge";

class SingleBook extends Component {
  render() {
    return (
      <>
        <Card
          onClick={(e) => this.props.changeBook(this.props.selectedBook)}
          style={{
            border: !this.props.selectedBook ? "2px solid red" : "none",
          }}
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
