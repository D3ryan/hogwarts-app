import logo from "./logo.svg";
import "./App.scss";
import CharacterCard from "./app/shared/components/CharacterCard/CharacterCard";
import Button from "./app/shared/components/Button/Button";
import Navbar from "./app/shared/components/Navbar/Navbar";
import Modal from "./app/shared/components/Modal/Modal";

function App() {
  return (
    <>
      <CharacterCard />
      <Button/>
      <Navbar/>
      <Modal/>
    </>
  );
}

export default App;
