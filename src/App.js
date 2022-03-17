import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import BookList from "./components/BookList";
import SingleBook from "./components/SingleBook";
import WarningSign from "./components/WarningSign";
import data from "./data/sciFi.json";

function App() {
  return (
    <div>
      <WarningSign message="welcome to the book store" />
      <SingleBook data={data[0]} />
      <BookList data={data} />
    </div>
  );
}

export default App;
