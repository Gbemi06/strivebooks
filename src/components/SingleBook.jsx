import { Card, Button } from "react-bootstrap";

const SingleBook = (data) => {
  console.log(data.data);
  return (
    <>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={data.data[0].img} />
        <Card.Body>
          <Card.Title>{data.data[0].title}</Card.Title>
          <Button variant="primary">{data.data[0].price}</Button>
        </Card.Body>
      </Card>
    </>
  );
};

export default SingleBook;
