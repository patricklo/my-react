import React, { Component } from 'react';
import ReactDOM from 'react-dom';


class Content extends React.Component {
    render() {
        return  <div>
            <input type="text" value={this.props.myDataProp} onChange={this.props.updateStateProp} />
            <h4>{this.props.myDataProp}</h4>
        </div>;
    }
}

class HelloMessage extends React.Component{
    constructor(props) {
        super(props);
        this.state = {value:'Hello Patrick'};
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event){
        this.setState({value: event.target.value});
    }

    render(){
        var value = this.state.value;
        return (
            <div>
                <Content myDataProp={value} updateStateProp = {this.handleChange}></Content>
            </div>
        );
    }
}


ReactDOM.render(<HelloMessage />, document.getElementById("react_form_event_example"));