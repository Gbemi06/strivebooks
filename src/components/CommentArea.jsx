import { useEffect, useState } from "react";
import AddComment from "./AddComment";
import CommentList from "./CommentList";

const CommentArea = ({ asin }) => {
  const [selectedComment, setSelectedComment] = useState([]);
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    fetchData();
  }, [asin]);

  const fetchData = async () => {
    let response = await fetch(
      "https://striveschool-api.herokuapp.com/api/comments/" + asin,
      {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWZhNzAyYTgyZWExZDAwMTViYjA0N2MiLCJpYXQiOjE2NDgxMjUwMzQsImV4cCI6MTY0OTMzNDYzNH0.axu7fq2pPqWBioFFvj3fTolu_NO9muFI7Z8pI9nlHgU",
        },
      }
    );
    let data = await response.json();
    console.log(data);
    console.log(asin);
    setSelectedComment(data);
  };

  return (
    <div>
      <CommentList data={selectedComment} />
      <AddComment asin={asin} />
    </div>
  );
};

export default CommentArea;
