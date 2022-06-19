import React from "react";

function InputArea(props) {
    return <div className="input-area">
        <input name="noteHead" className="input-area--heading" type="text" placeholder="Title" value={props.note.noteHead}  onChange={props.handleNoteUpdate}/>
        <textarea name="noteBody" className="input-area--body" placeholder="Notes" value={props.note.noteBody}  onChange={props.handleNoteUpdate}></textarea>
        <button className="input-area--btn-add" onClick={props.addNoteToList}>+</button>
        {props.notification?<p>Can not create note with blank title or body.</p>:null}
    </div>
}

export default InputArea;