import Button from "./components/ButtonStyled.jsx";
import Modal from "./components/Modal.jsx"
import './App.css';
import { useState } from "react";

function App() {
  const [showModal, setShowModal] = useState(false);


  return (
    <div className="App">
      {showModal ? <Modal setShowModal={setShowModal} /> : <Button onClick={() => setShowModal(true)}>Click to show Modal</Button>}
    </div>
  );
}

export default App;
