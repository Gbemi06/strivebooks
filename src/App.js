import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyBadge from "./components/MyBadge";
import SingleBook from "./components/SingleBook";
import WarningSign from "./components/WarningSign";
import data from "./data/sciFi.json";

function App() {
  return (
    <div>
      <WarningSign message="welcome to the book store" />
      <MyBadge color="black" bgColor="yellow" text="New" padding={8} />
      <SingleBook data={data} />
    </div>
  );
}

export default App;
