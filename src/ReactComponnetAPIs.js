import React, { Component } from 'react';
import ReactDOM from 'react-dom';


class Counter extends React.Component{
    constructor(props){
        super(props);
        this.state = {clickCount:0};
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        this.setState(function(state){
            return {clickCount:state.clickCount + 1}
        });
    }

    render(){
        return (<h2 onClick={this.handleClick}>Click me! 点击次数为: {this.state.clickCount}</h2>)
    }
}

ReactDOM.render(<Counter/>, document.getElementById("react_component_api_example"))