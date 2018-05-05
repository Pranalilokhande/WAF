import React from "react";

export default function Snackbar(props) {
    const {showMessage, handleClick, closeMessage} = props;

    let newClass = "hideDiv"

    if (showMessage === true)
        newClass = "info showDiv" 

    return <div>
        <button className="snackbar" type="button" onClick={handleClick}>Snackbar!</button><br/> 
        <div className="snackbar">
            Auto Hide Duration in ms <br/><input type="text" id="duration"/>
        </div>
        <div className={newClass}>
            Event added to your calendar
        </div>
     </div>
}
