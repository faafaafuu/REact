import React from "react";
import { render } from "react-dom";

function ToDoTitle() {
  return <h1>Title</h1>;
}

function TitleList() {
  return (
    <ul>
      <li>ToDoTitle()</li>
      <li>
        <ToDoTitle />
      </li>
      <li>
        <ToDoTitle />
      </li>
      <li>
        <ToDoTitle />
      </li>
    </ul>
  );
}

render(<TitleList />, document.getElementById("root"));
