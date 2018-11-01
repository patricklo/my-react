import React from 'react';
import ReactDOM from 'react-dom';

function HelloMessage(props) {
    return <h1>Component defined by function!</h1>;
}

const element = <HelloMessage name="Runoob"/>;

ReactDOM.render(
    element,
    document.getElementById('component_by_func_example')
);