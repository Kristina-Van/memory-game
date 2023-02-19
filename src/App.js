
import './App.css';
import NewComponent from "./NewComponent";
import {useState} from "react";

function App() {

const [isOpen, setIsOpen] = useState(false);
const toggle = () => {
  setIsOpen(!isOpen)
}

  return (
    <div className="App">
      <h1>Use Effect</h1>

        <button onClick={toggle}>Open</button>
      { isOpen &&
          <NewComponent/>
      }
    </div>
  );
}

export default App;
