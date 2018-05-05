import React from "react";

export default function TextFieldItems(props) {
    const {id, placeholder, error_text, active} = props;

    let newClass = "hideDiv"
    if (active === true){
        newClass = "showDiv error"
    }

    return <div>
        <input type="text" id={id} placeholder={placeholder} size="30"/><br/>
        <p className={newClass}>{error_text}</p>
     </div>
}
