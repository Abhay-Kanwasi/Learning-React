import React, { useState } from "react";
import PropTypes from "prop-types";

const Something = (props) => {
    const [name, setName] = useState("");
    const handleClick = () => {
        console.log("button clicked.")
        setName("Rahul")
    }
    return (
        <>
            <h1>something is {name}</h1>
            <button onClick={handleClick}>Click Me</button>
        </>
    )
}


export default Something;