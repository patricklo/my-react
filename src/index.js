import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import './JSXExample.js'
import './ReactRenderHTMLElement'
import './ReactRenderReactComponent'
import './ComponentByFunc'
import './ComponentByES6'
import './MultiComponents'
import './ReactState'
import './ReactFlows'
import './ReactProps'
import './ReactDefaultProps'
import './ReactStateAndProps'
import './ReactPropsTypesValidator'
import './ReactToggleEventHandle'
import './LoginControl'
import './ReactOperators'
import './ReactHideComponnent'

ReactDOM.render(<App />, document.getElementById('root'));

function Clock(props){
    return (
            <div>
                <h1>Hello Element</h1>
                <h2>Now is {props.date.toLocaleTimeString()}</h2>
                <h2>Msg: {props.msg}</h2>
            </div>
        )
}

class ClockReact extends React.Component{
    render() {
        return (
            <div>
                <h1>Hello Element</h1>
                <h2>Now is {this.props.date.toLocaleTimeString()}</h2>
                <h2>Msg: {this.props.msg}</h2>
            </div>
        )
    }
}

function tick() {
    ReactDOM.render(
        <Clock date={new Date()} msg="this is a message"></Clock>,
        document.getElementById('example')
    );
}

function tick2() {
    ReactDOM.render(
        <ClockReact date={new Date()} msg="this is a message"></ClockReact>,
        document.getElementById('example2')
    );
}

setInterval(tick, 1000);
setInterval(tick2, 1000);



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
