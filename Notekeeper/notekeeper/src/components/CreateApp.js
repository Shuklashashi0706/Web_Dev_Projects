import React from "react";
import {useState} from "react";

function CreateApp(props) {
  const [input, setInput] = useState([{ title: "", content: "" }]);
  function handleChange(event) {
    const { name, value } = event.target;
    setInput((prevNote) => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }
  function submitNote(event){
    props.onAdd(input);
    setInput({ title: "", content: "" });
    event.preventDefault();
  }
  return (
    <div>
      <div className="flex flex-col items-center p-4">
        <form className="p-3 flex flex-col justify-center items-center">
          <input
            name="title"
            value={input.title}
            onChange={handleChange}
            type="text"
            className="w-[30rem] border border-black px-4 mx-3"
            placeholder="Title.."
          ></input>
          <textarea
            name="content"
            value={input.content}
            onChange={handleChange}
            className="px-5 border w-[30rem] border-black"
            placeholder="Your note..."
          />
        <button onClick={submitNote} className="bg-yellow-300 rounded-md px-3 h-[2rem] w-[5rem] ">
          Add
        </button>
        </form>
      </div>
    </div>
  );
}

export default CreateApp;
