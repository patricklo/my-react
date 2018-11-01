import React from 'react';
import ReactDOM from 'react-dom';
import MyReactComponent from './MyReactComponent'

var myElement = <MyReactComponent someProperty={true} msg="my msag" />;
ReactDOM.render(myElement, document.getElementById('react_render_react_component_example'));