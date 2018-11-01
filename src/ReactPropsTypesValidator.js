import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';


var title = "React PropsTypes Validator title";
//var title = 123

class MyTitle extends React.Component{
    render(){
        return (
            <h1> title: {this.props.title}</h1>
        );
    }
}

MyTitle.propTypes = {
    title: PropTypes.oneOfType([
            PropTypes.number
    ])
}

ReactDOM.render(<MyTitle title={title}/>, document.getElementById("react_props_validator_example"));