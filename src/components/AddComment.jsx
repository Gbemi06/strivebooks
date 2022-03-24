import { Component } from "react";
import { Container, Form, Button } from "react-bootstrap";

class AddComment extends Component {
  state = {
    comment: {
      comment: "",
      rate: 1,
      elementId: this.props.asin,
    },
  };

  sendComment = async (e) => {
    e.preventDefault();

    let response = await fetch(
      "https://striveschool-api.herokuapp.com/api/comments/" + this.props.asin,
      {
        method: "POST",
        body: JSON.stringify(this.state.comment),

        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWZhNzAyYTgyZWExZDAwMTViYjA0N2MiLCJpYXQiOjE2NDgxMjUwMzQsImV4cCI6MTY0OTMzNDYzNH0.axu7fq2pPqWBioFFvj3fTolu_NO9muFI7Z8pI9nlHgU",
        },
      }
    );
    let data = await response.json();
    console.log(data);
    this.setState({ comment: data });
  };
  render() {
    return (
      <Container>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Comment</Form.Label>
            <Form.Control
              type="text"
              placeholder="Write your comment here"
              value={this.state.comment.comment}
              onChange={(e) =>
                this.setState({
                  comment: {
                    ...this.state.comment,
                    comment: e.target.value,
                  },
                })
              }
            />
            <Form.Text className="text-muted">
              Please try and be as objective as you can. God bless you
            </Form.Text>
          </Form.Group>
          <Form.Group>
            <Form.Label>Rating</Form.Label>
            <Form.Control
              as="select"
              value={this.state.comment.rate}
              onChange={(e) =>
                this.setState({
                  comment: {
                    ...this.state.comment,
                    rate: e.target.value,
                  },
                })
              }
            >
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </Form.Control>
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
