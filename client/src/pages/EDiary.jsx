import { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import NotesList from "../components/NotesList";
import NotesSearch from "../components/NotesSearch";
import NotesHeader from "../components/NotesHeader";
import "../assets/css/EDiary.css";

const EDiary = () => {
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      Text: "This is my first note!",
      Date: "1/02/2023",
    },
    {
      id: nanoid(),
      Text: "This is my second note!",
      Date: "15/03/2023",
    },
    {
      id: nanoid(),
      Text: "This is my third note!",
      Date: "2/04/2023",
    },
    {
      id: nanoid(),
      Text: "This is my fourth note!",
      Date: "25/04/2023",
    },
  ]);

  const [searchText, setSearchText] = useState("");
  const [darkMode, setDarkMode] = useState(false);
  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem("e-diary-data"));
    if (savedNotes) {
      setNotes(savedNotes);
    }
  }, []);
  useEffect(() => {
    localStorage.setItem("e-diary-data", JSON.stringify(notes));
  }, [notes]);

  const AddNote = (Text) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      Text: Text,
      date: date.toLocaleDateString(),
    };
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  };

  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  };

  return (
    <div className="notes-background">
      <div className={`${darkMode && "dark-mode"}`}>
        <div className="notes-container">
          <NotesHeader handleToggleDarkMode={setDarkMode} />
          <NotesSearch handleSearchNote={setSearchText} />
          <NotesList
            notes={notes.filter((note) =>
              note.Text.toLowerCase().includes(searchText)
            )}
            handleAddNote={AddNote}
            handleDeleteNote={deleteNote}
          />
        </div>
      </div>
      {/* <WellbyChatbot /> */}
      {/* <div className="container">
        <Header handleToggleDarkMode={setDarkMode}/>
        <Search handleSearchNote={setSearchText}/>
        <NotesList notes={notes.filter((note)=>note.Text.toLowerCase().includes(searchText))} handleAddNote={AddNote} handleDeleteNote={deleteNote} />
      </div> */}
    </div>
  );
};

export default EDiary;
