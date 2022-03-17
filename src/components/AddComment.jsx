import { Component } from "react";
import { Container, Form, Button } from "react-bootstrap";

class AddComment extends Component {
    state = {
        comment: {
            comment: "",
        rate: "",
        elementId: ""
        }
        
    }

    componentDidMount = () => {
        this.fetchData()
    }

    fetchData = async () => {
    let response = await fetch(
      "https://striveschool-api.herokuapp.com/api/comments/" + this.props.asin,
      {
        method: "POST",
        body: JSON.stringify(this.)
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWZhNzAyYTgyZWExZDAwMTViYjA0N2MiLCJpYXQiOjE2NDY4Mjc5MjMsImV4cCI6MTY0ODAzNzUyM30.bv0OPqIsk7sINCAZvAlech3BRJzoVaHtSIYkuklYQ2o",
        },
      }
    );
        let
    }  render() {
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
