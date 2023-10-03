import React, { useState } from "react";

function CreateArea(props) {
  const [items,setItem]=useState({
    title:"",
    content:""
  });

  function addItem(event){
    const {name,value}=event.target;
    setItem(prevValue =>{
       return {
        ...prevValue,
        [name]:value
       };
    });
  }

  function submitNote(event){
    props.handleAuxClick(items);
    // items={};
    event.preventDefault();
    

  }
  return (
   
    <div>
      <form>
        <input onChange={addItem} value={items.title} type="text" name="title" placeholder="Title" />
        <textarea  onChange={addItem} value={items.content} type="text" name="content" placeholder="Take a note..." rows="3"  />
        <button onClick={submitNote}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
