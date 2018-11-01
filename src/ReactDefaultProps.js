import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class MyReactDefaultProps extends React.Component{
    render(){
        return (
            <h1> React Default Props: {this.props.name}</h1>
        )
    }
}

MyReactDefaultProps.defaultProps = {
    name: 'anonymous'
}

ReactDOM.render(<MyReactDefaultProps/>, document.getElementById('react_default_props_example'))