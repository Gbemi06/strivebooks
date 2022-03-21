import { Container, ListGroup } from "react-bootstrap";

const CommentList = ({ data }) => {
  return (
    <Container>
      {console.log(data)}
      <ListGroup>
        {data.map((book, i) => (
          <ListGroup.Item key={book._id}>
            {i + 1} - {book.comment}
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Container>
  );
};

export default CommentList;
