import { Component } from "react";
import { Container, Form, Button } from "react-bootstrap";

class AddComment extends Component {
  render() {
    return (
      <Container>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicText">
            <Form.Label>Comment</Form.Label>
            <Form.Control type="text" placeholder="Write your comment here" />
            <Form.Text className="text-muted">
              Please try and be as objective as you can. God bless you
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicNumber">
            <Form.Label>Rating</Form.Label>
            <Form.Control type="number" placeholder="Rate the book" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Container>
    );
  }
}

export default AddComment;
