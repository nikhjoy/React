import React from 'react';
import './Contact.css';

function Contact(props){

    var st = {color:"brown",padding: 10, border: "solid 1px blue"};
    var nm = props.name.toUpperCase();

    return(

        <div style={props.st}>
            <p>{props.id[1]}</p>
            <h2>{nm} contact form</h2>
            <label>Email: </label>
            <input type="text"/>
            <br/>
            <label>Message: </label>
            <textarea />
            <button>Send</button>
        </div>

    );
}

export default Contact;