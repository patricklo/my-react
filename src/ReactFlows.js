import React, { Component } from 'react';
import ReactDOM from 'react-dom';


function FormattedDate(props){
    return <h2>now is {props.date.toLocaleTimeString()}.</h2>
}

class MyFlowClock extends React.Component{
    constructor(props){
        super(props);
        this.state = {date: new Date()}
    }

    tick(){
        this.setState({date: new Date()})
    }

    componentDidMount(){
        this.timerID = setInterval(
            () => this.tick(),
            1000
        )
    }

    componentWillUnmount(){
        clearInterval(this.timerID)
    }

    render(){
        return (
            <div>
                <h1> React Folow Sample</h1>
                <FormattedDate date = {this.state.date}/>
            </div>
        )
    }
}

function App(){
    return (
        <div>
            <MyFlowClock/>
            <MyFlowClock/>
            <MyFlowClock/>
        </div>
    )
}

ReactDOM.render(<App/>, document.getElementById('react_flows_example'))


