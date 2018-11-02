import React from 'react';
import ReactDOM from 'react-dom';

var myStyle = {
    fontSize: 100,
    color: '#FF0000'
}

var arr = [
    <h2> arr01 </h2>,
    <h1> arr02 </h1>
]

ReactDOM.render(
    /* 注释 */
    <div>
        {arr}
    <h1 style={myStyle}> this is JSX Example </h1>
    <h1>Hello, world! 1+1 = {1+1 === 2 ? 'true':'False'}</h1>
        {/* this is comments ..................*/}
    </div>,
    document.getElementById('jsx_example')
);