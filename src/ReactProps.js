import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class MyReactProps extends React.Component{
    render(){
        return (
            <h1> React Props: {this.props.name}</h1>
        )
    }
}

ReactDOM.render(<MyReactProps name="Patrick"/>, document.getElementById('react_props_example'))