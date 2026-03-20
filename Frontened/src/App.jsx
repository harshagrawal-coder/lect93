import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const App = () => {
  const [notes, setnotes] = useState([]);
  function fetchnotes() {
    axios.get("https://lect93-hoja.onrender.com/notes").then((res) => {
      setnotes(res.data.notes);
    });
  }
  useEffect(() => {
    fetchnotes();
  }, []);

  function handlesumbit(e) {
    e.preventDefault();
    const { name, pin } = e.target.elements;
    console.log(name.value, pin.value);
    axios
      .post("https://lect93-hoja.onrender.com/notes", {
        name: name.value,
        pin: pin.value,
      })
      .then((res) => {
        // setnotes(res.data)
        console.log(res.data);
        fetchnotes();
      });
  }

  function handleDleteNote(noteid) {
    axios.delete("https://lect93-hoja.onrender.com/notes/" + noteid)
      .then((res) => console.log(res.data));
      fetchnotes()
  }
  return (
    <>
      <form className="flex gap-2.5 p-2 bg-blue-400" onSubmit={handlesumbit}>
        <input
          className="bg-white"
          name="name"
          type="text"
          placeholder="enter ur name"
        />
        <input
          className="bg-white"
          name="pin"
          type="text"
          placeholder="enter ur pin"
        />
        <button className="bg-white  p-2 rounded-2xl">create note </button>
      </form>
      <div className="notes flex flex-wrap gap-4 p-4  ">
        {notes.map((note, id) => {
          return (
            <div key={id} className="note rounded-[10px]  p-3 w-[200px] ">
              <h1 className="p-2">{note.name}</h1>
              <p>{note.pin}</p>
              <button
                onClick={() => {
                  handleDleteNote(note._id);
                }}
              >
                Delete
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default App;
