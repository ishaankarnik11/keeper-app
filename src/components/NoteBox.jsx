import React from "react";

function NoteBox(props){
    return <div className="note-box">
    <p className="note-heading">{props.noteHead}</p>
    <p className="note-body">{props.noteBody}</p>
    <a href="#" className="note-delete" onClick={()=>{props.removeNoteFromList(props.id)}}>Delete</a>
    </div>;
}

export default NoteBox;