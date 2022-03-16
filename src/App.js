import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyBadge from "./components/MyBadge";
import WarningSign from "./components/WarningSign";

function App() {
  return (
    <div>
      <WarningSign message="welcome to the book store" />
      <MyBadge color='black' bgColor='yellow' text='New' padding={8}/>
    </div>
  );
}

export default App;
