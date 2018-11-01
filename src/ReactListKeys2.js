import React, { Component } from 'react';
import ReactDOM from 'react-dom';


class NumbersList extends React.Component{
    constructor(props) {
        super(props);
    }

    render(){
        const numbers = this.props.numbers;
        const listItems = numbers.map((number) =>
            <li key={number.toString()}>
                {number}
            </li>
        );
        return (
            <ul>{listItems}</ul>
        )
    }
}

const numbers = [1,2,3,4,5]

ReactDOM.render(<NumbersList numbers={numbers}/>, document.getElementById("react_list_keys_example2"))