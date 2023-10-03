import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes";



function App() {
  return (
    <div>
      <Header />
      {notes.map((para)=>(
    <Note 
    key={para.key}
    title={para.title}
    contents={para.content}
  />
      )
  )}
      <Footer />
    </div>
  );
}

export default App;
