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
        method: "GET",
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWZhNzAyYTgyZWExZDAwMTViYjA0N2MiLCJpYXQiOjE2NDY4Mjc5MjMsImV4cCI6MTY0ODAzNzUyM30.bv0OPqIsk7sINCAZvAlech3BRJzoVaHtSIYkuklYQ2o",
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
