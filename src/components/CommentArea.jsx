import { Component } from "react";
import AddComment from "./AddComment";
import CommentList from "./CommentList";

class CommentArea extends Component {
  state = {
    selectedComment: [],
  };

  componentDidMount = () => {
    this.fetchData();
  };

  fetchData = async () => {
    let response = await fetch(
      "https://striveschool-api.herokuapp.com/api/comments/" + this.props.asin,
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
    console.log(this.props.asin);
    this.setState({ selectedComment: data });
  };

  render() {
    return (
      <div>
        <CommentList data={this.state.selectedComment} />
        <AddComment data={this.state.selectedComment} />
      </div>
    );
  }
}

export default CommentArea;
