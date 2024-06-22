import React, { useState } from "react";
import { FaBook } from "react-icons/fa";
import { MdLightMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";

const NotesHeader = ({ handleToggleDarkMode }) => {
  const [isLightMode, setIsLightMode] = useState(false);

  return (
    <div className="notes-header">
      <h1>
        <FaBook /> {""}
        E-Diary
      </h1>
      <button
        className="save"
        onClick={() => {
          handleToggleDarkMode((previousDarkMode) => !previousDarkMode);
          setIsLightMode((prevState) => !prevState);
        }}
      >
        <div className="toggle-mode-icon">
          {isLightMode ? <MdDarkMode /> : <MdLightMode />}
          <span>Toggle Mode</span>
        </div>
      </button>
    </div>
  );
};
export default NotesHeader;
