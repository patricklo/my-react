import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class MyClock extends React.Component{
    constructor(props){
        super(props);
        this.state = {date: new Date()};
    }

    tick(){
        this.setState({date: new Date()});
    }

    componentDidMount(){
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount(){
        clearInterval(this.timerID)
    }

    render() {
        return (
            <div>
                <h1> Clock :</h1>
                <h2> now Is : {this.state.date.toLocaleTimeString()}</h2>
            </div>
        )
    }

}

ReactDOM.render(<MyClock/>, document.getElementById('react_state_example'))
