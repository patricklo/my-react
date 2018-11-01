import React, { Component } from 'react';
import ReactDOM from "react-dom";

class ComponentByES6 extends Component {
    render() {
        return (
            <div>
                <h1>Component defined by ES6</h1>
            </div>
        );
    }
}


const element = <ComponentByES6 name="Runoob"/>;

ReactDOM.render(
    element,
    document.getElementById('component_by_ES6_example')
);
