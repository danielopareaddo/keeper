import React, { useState } from "react";
import Header from "./Header";
import CreateArea from "./CreateArea";
import Note from "./Note";
import Footer from "./Footer";

function App(){
 const [allNotes, setAllNotes] = useState([])

 function addNote(note){
    setAllNotes(prevAllNotes=>{
    return[...prevAllNotes, note]
    })
 }

 function deleteNote (id){
  setAllNotes(prevAllNotes=>{
    return prevAllNotes.filter(
    (allNotes, index)=>{
    return index !== id;
    })
  });
 }

 return(
 <div>

 <Header/>

 <CreateArea onAdd = {addNote}/>

 {allNotes.map((noteItem,index)=>{
    return <Note
    key={index}
    id={index}
    deleteFunction = {deleteNote}
    title={noteItem.title} 
    content={noteItem.content}/>
 })}

 <Footer/>
 </div>
 )
}

export default App






// STATIC NOTE NOT NEEDED ANYMORE
// <Note 
// key={1}
// id={1}
// title="Note title"
// content="Note content" 
// />