import React from "react";
import NoteBox from "./NoteBox";
// import notesList from "../data/sourceData";

function NoteContainer(props)
{
    return <div className="notes-container">
    {props.notesList.map((data,index)=><NoteBox key={index} id={data._id} noteHead={data.noteHead} noteBody={data.noteBody} removeNoteFromList={props.removeNoteFromList}/>)}
    </div>;
}

export default NoteContainer;