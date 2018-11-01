import React, { Component } from 'react';

class MyReactComponent extends Component {
    render() {
        return (
            <div>
                <h1>My React  Component</h1>
                <h2>{this.props.someProperty}</h2>
                <h2>Msg: {this.props.msg}</h2>
             </div>
        );
    }
}

export default MyReactComponent;
