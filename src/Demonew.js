import React, {Component} from 'react';

class Demonew extends Component{

    constructor(props){
        super(props);
        this.state = {
            counter : 0,
            enable : false,
            textcontent : "nothing"
        };
    }

    clickhandler=()=>{
        this.setState( (prev,props)=>(
            {counter:prev.counter+1}
        ) );
    }

    increment=()=>{
        this.setState( (prev,props)=>(
            {counter:prev.counter+1}
        ) );
    }

    decrement=()=>{
        this.setState( (prev,props)=>(
            {counter:prev.counter-1}
        ));
    }

    checkClicked=()=>{
        this.setState( (prev,props)=>(
            {enable: !prev.enable}
        ) )
    }

    textchangeEvent = (e)=>{
        
        this.setState( {textcontent:e.target.value} )
    }

    render(){

        return (

            <div>
                <button onClick={ this.increment }>+</button>
                <button onClick={ this.decrement }>-</button>
                <p>you have clicked {this.state.counter} times</p>
            
            <input onChange={this.textchangeEvent} type="text"/><br />
            <h3>{this.state.textcontent}</h3>
            
            <label>Enable
                <input type="checkbox" onClick={this.checkClicked}></input>
            </label>

            <p>It is {this.state.enable?"Enabled":"Disabled"}</p>
            <br>
            </br>
            <h2>It is {this.state.enable?"Enabled":"Disabled"}</h2>

            
            </div>

        )
    }

}

export default Demonew;

