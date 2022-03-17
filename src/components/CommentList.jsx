import { Container, ListGroup } from "react-bootstrap";

const CommentList = ({ data }) => {
  return (
    <Container>
      {console.log(data)}
      <ListGroup key={data._id}>
        {data.map((book, i) => (
          <ListGroup.Item>
            {i + 1} - {book.comment}
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Container>
  );
};

export default CommentList;
