import React from 'react';
import ReactDOM from 'react-dom';
import styles from './mystyle.module.css'; 
import Contact from './Contact';

function App() {

  return(
    <div>
    <Contact st={{ color:"green"}} id={ ["nikhil","avan"]} name="teacher"/>
    <p>some contents</p>
    <Contact st={{color:"blue"}} id={ ["harish","liya"]} name="student"/>

  </div>

  );

}


export default App;