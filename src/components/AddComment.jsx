import { useEffect, useState } from "react";
import { Container, Form, Button } from "react-bootstrap";

const AddComment = ({ asin }) => {
  const [comment, setComment] = useState({
    comment: "",
    rate: 1,
    elementId: asin,
  });

  useEffect(() => {
    sendComment((message) => ({
      ...message,
      elementId: asin,
    }));
  }, [asin]);

  const sendComment = async (e) => {
    e.preventDefault();

    let response = await fetch(
      "https://striveschool-api.herokuapp.com/api/comments/",
      {
        method: "POST",
        body: JSON.stringify(comment),
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWZhNzAyYTgyZWExZDAwMTViYjA0N2MiLCJpYXQiOjE2NDgxMjUwMzQsImV4cCI6MTY0OTMzNDYzNH0.axu7fq2pPqWBioFFvj3fTolu_NO9muFI7Z8pI9nlHgU",
        },
      }
    );
    if (response.ok) {
      alert("message sent successfully");
      console.log(comment);
      setComment(comment);
    }
  };
  return (
    <Container>
      <Form onSubmit={sendComment}>
        <Form.Group className="mb-3">
          <Form.Label>Comment</Form.Label>
          <Form.Control
            type="text"
            placeholder="Write your comment here"
            value={comment.comment}
            onChange={(e) =>
              setComment({
                ...comment,
                comment: e.target.value,
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
            value={comment.rate}
            onChange={(e) =>
              setComment({
                ...comment,
                rate: e.target.value,
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
};

export default AddComment;
