import React, { Component } from 'react';
import ReactDOM from 'react-dom';

/*
state 和 props 主要的区别在于 props 是不可变的，而 state 可以根据与用户交互来改变。这就是为什么有些容器组件需要定义 state 来更新和修改数据。 而子组件只能通过 props 来传递数据。
实例演示了如何在应用中组合使用 state 和 props 。我们可以在父组件中设置 state， 并通过在子组件上使用 props 将其传递到子组件上。在 render 函数中, 我们设置 name 和 site 来获取父组件传递过来的数据。
*/

class ParentComponent extends React.Component{
    constructor(){
        super();

        this.state = {
            name:"myname",
            site:"http://123.com"
        }
    }

    render(){
        return (
            <div>
                <ChildCompnt1 name={this.state.name}/>
                <ChildCompnt2 site={this.state.site}/>
            </div>
        )
    }
}


class ChildCompnt1 extends React.Component{
    render(){
        return (
            <h1>{this.props.name}</h1>
        );
    }
}


class ChildCompnt2 extends React.Component{
    render(){
        return (
            <a href={this.props.site}>
                {this.props.site}
            </a>
        );
    }
}


ReactDOM.render(<ParentComponent/>, document.getElementById('react_state_props_example'))