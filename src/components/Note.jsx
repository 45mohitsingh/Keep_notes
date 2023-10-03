import React from "react";

function Note(props) {
  // console.log("checked");
  function pressDelete(){
    props.delete(props.id);
  }
  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={pressDelete}>DELETE</button>
    </div>
  );
}

export default Note;
