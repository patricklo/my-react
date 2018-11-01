import React, { Component } from 'react';
import ReactDOM from "react-dom";

function Name(props){
    return <h1>Name: {props.name}</h1>
}

class Nickname extends Component {
    render() {
        return (
            <div>
                <h1>{this.props.nickname}</h1>
            </div>
        );
    }
}

function App(){
    return (
        <div>
            <h2>Multi Components combination</h2>
            <Name name="Patrick"/>
            <Nickname nickname="abc"/>
        </div>
    )
}


ReactDOM.render(
    <App/>,
    document.getElementById('multi_components_example')
);
