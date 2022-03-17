import { Container, ListGroup } from "react-bootstrap";

const CommentList = ({ data }) => {
  return (
    <Container>
      {console.log(data)}
      <ListGroup key={data._id}>
        {data.map((book) => (
          <ListGroup.Item>{book.comment}</ListGroup.Item>
        ))}
      </ListGroup>
    </Container>
  );
};

export default CommentList;
