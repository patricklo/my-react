import React, { Component } from 'react';
import ReactDOM from 'react-dom';


function ListItme(props){
    //不需要指定keys:
    return <li>{props.value}</li>
}

class NumberList extends React.Component{
    constructor(props) {
        super(props);
    }

    render(){
        const numbers = this.props.numbers;
        const listItems = numbers.map((number) =>
            <ListItme key={number.toString()} value={number}/>
        );
        return (
            <ul>{listItems}</ul>
        )
    }
}


const numbers =[1,2,3,4,56]
ReactDOM.render(<NumberList numbers={numbers}/> , document.getElementById('react_keys_example'))