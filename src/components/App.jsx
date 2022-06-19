import React, { useState, useEffect } from "react";
import axios from "axios";

import Heading from "./Heading";
import NoteContainer from "./NoteContainer"
import Footer from "./Footer"
import InputArea from "./InputArea";



function App(){
    let [note,addNote] = useState({
        noteHead:"",
        noteBody:"",
        id: ""
    });

    let [notesList, updateNotesList] = useState([]);

    let [notification, changeNotification] = useState(false);

    useEffect(() => {
      axios.get("http://localhost:5000/notes/")
        .then(response=>{
            let tempList = [];
            response.data.map(data=>{tempList.push(data)});
            updateNotesList(tempList);
        });

        
        return () => {
        
      }
    },[notesList])
    
    
    function handleNoteUpdate(e){
        // console.log(e.target.value)
        let {name,value} = e.target;
        addNote({
            ...note,
            [name]: value
        });
    }

    function addNoteToList()
    {
        //check type of note
        //based on type of note, split body in multiple strings or store all in array 0.
        
        axios.post("http://localhost:5000/notes/addNote", {"noteHead": note.noteHead,"noteBody": note.noteBody})
        .then(()=>{
            updateNotesList([...notesList,note]);
            addNote({
                noteHead:"",
                noteBody:""
            });
        })
        .catch(err=>{showNotification()});
    }

    function removeNoteFromList(id){
        axios.delete(`http://localhost:5000/notes/${id}`)
        .then(()=>{
            updateNotesList([])    
        });
        // notesList.splice(id,1);
        // updateNotesList([...notesList]);
    }

    function showNotification(){
        changeNotification(true);
        setTimeout(()=>{changeNotification(false)},1500);
    }
    

    return <div className="App">
    <Heading />
    <InputArea note={note} addNoteToList={addNoteToList} handleNoteUpdate={handleNoteUpdate} notification={notification}/> 
    <NoteContainer notesList={notesList} removeNoteFromList={removeNoteFromList}/>
    <Footer /></div>
}

export default App;