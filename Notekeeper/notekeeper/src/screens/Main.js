import { React, useState } from "react";
import Footer from "../components/Footer";
// import notes from "../components/notes";
import Card from "../components/Card";
import App from "../components/CreateApp";
function Main() {
  const [arr, setArr] = useState([]);
  function createNote(note, index) {
    return (
      <>
        <Card
          id={index}
          key={index}
          title={note.title}
          content={note.content}
          onDelete={deleteNote}
        />
      </>
    );
  }
  function deleteNote(id) {
    setArr((prevNote) => {
      return prevNote.filter((note, index) => {
        return index !== id;
      });
    });
  }
  function addNote(newNote) {
    setArr((prevNote) => {
      return [...prevNote, newNote];
    });
  }

  return (
    <>
      <App onAdd={addNote} />
      <div className=" h-[39rem]  border border-black flex  flex-wrap">
        {arr.map(createNote)}
      </div>
      <Footer />
    </>
  );
}

export default Main;
