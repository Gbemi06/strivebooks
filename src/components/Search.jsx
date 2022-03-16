import React, { Component } from "react";
import { Form, FormControl } from "react-bootstrap";
import BookList from "./BookList";

class Search extends Component {
  state = {
    searchQuery: "",
  };
  render() {
    return (
      <>
        <Form inline className="d-flex justify-content-center p-3">
          <FormControl
            type="text"
            value={this.state.searchQuery}
            placeholder="Search"
            className="mr-sm-2 w-50 p-4 m-3 text-"
            onChange={(event) =>
              this.setState({
                state: {
                  ...this.state,
                  // the spread operator allows me to start from the EXISTING reservation
                  // ...this.state.reservation is bringing into this new reservation object
                  // the existing properties! name, phone, numberOfPeople etc.
                  searchQuery: event.target.value,
                  // I should find a way of preserving the other fields here!
                },
              })
            }
          />
        </Form>
        <BookList data={this.state.searchQuery} />
      </>
    );
  }
}
export default Search;
