import { Component } from "react";
import AddComment from "./AddComment";
import CommentList from "./CommentList";

class CommentArea extends Component {
  state = {
    selectedComment: [],
  };

  componentDidUpdate = (prevProps) => {
    if (prevProps.asin !== this.props.asin) {
      this.fetchData();
    }
  };

  fetchData = async () => {
    let response = await fetch(
      "https://striveschool-api.herokuapp.com/api/comments/" + this.props.asin,
      {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWZhNzAyYTgyZWExZDAwMTViYjA0N2MiLCJpYXQiOjE2NDgxMjUwMzQsImV4cCI6MTY0OTMzNDYzNH0.axu7fq2pPqWBioFFvj3fTolu_NO9muFI7Z8pI9nlHgU",
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
        <AddComment asin={this.props.asin} />
      </div>
    );
  }
}

export default CommentArea;
