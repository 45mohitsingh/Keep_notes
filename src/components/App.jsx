import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
 const [element,setElement]=useState([]);
  
  function handleClick(items){
    setElement(prevValue=>{
      return [...prevValue,items];
    });
    
  }
  function deleteItem(index){
    // console.log(index);
    setElement(prevValue =>{
      return prevValue.filter((obj,id)=>{ return id!==index});
    })
  }
  
  return (
    <div>
      <Header />
      <CreateArea handleAuxClick={handleClick}/>
      
      {element.map((listItems,index) =>{
       return <Note  key={index} 
       id={index}
       title={listItems.title} 
       content={listItems.content}
       delete={deleteItem} />
      })}
      
      <Footer />
    </div>
  );
}

export default App;
