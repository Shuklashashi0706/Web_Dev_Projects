import React from "react";
import Footer from "../components/Footer";
import notes from "../components/notes";
import Card from "../components/Card";
function Main() {
 
  function createNote(note) {
    return (
      <>
        <Card key={note.id} title={note.title} content={note.content} />
      </>
    );
  }
  
  return (
    <>
      <div className=" h-screen m-2 border border-black flex  flex-wrap">
        {notes.map(createNote)}
      </div>
      <Footer />
    </>
  );
}

export default Main;
