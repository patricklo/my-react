import React, { Component } from 'react';
import ReactDOM from 'react-dom';


class ChildContent extends React.Component {
    render() {
        return  <div>
            <button onClick = {this.props.updateStateProp}>点我</button>
            <h4>{this.props.myDataProp}</h4>
        </div>
    }
}


class HelloMessage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: 'Hello Runoob!'};
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event) {
        this.setState({value: '菜鸟教程'})
    }
    render() {
        var value = this.state.value;
        return <div>
            <ChildContent myDataProp = {value}
                     updateStateProp = {this.handleChange}></ChildContent>
        </div>;
    }
}

ReactDOM.render(
    <HelloMessage />,
    document.getElementById('react_child_component_example')
);

