import React, { Component } from 'react';
import ReactDOM from 'react-dom';


class Toggle extends React.Component{
    constructor(props){
        super(props);
        this.state = {isToggleOn:true};

        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(){
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn
        }))
    }

    render(){
        return (
            //this.handleClick适用于有bind(this)用法，如果没有bind(this), 应用onClick={(e) => this.handleClick(e)}
            //使用(onClick={(e) => this.handleClick(e))这个语法有个问题就是每次 LoggingButton 渲染的时候都会创建一个不同的回调函数。在大多数情况下，这没有问题。
            // 然而如果这个回调函数作为一个属性值传入低阶组件，这些组件可能会进行额外的重新渲染。我们通常建议在构造函数中绑定或使用属性初始化器语法来避免这类性能问题。
            <button onClick={this.handleClick}>
                {this.state.isToggleOn?'ON':'OFF'}
            </button>
        )
    }
}

class Popper extends React.Component{
    constructor(){
        super();
        this.state = {name:'Hello world!'};
    }

    preventPop(name, e){    //事件对象e要放在最后
        e.preventDefault();
        alert(name);
    }

    render(){
        return (
            <div>
                <p>hello</p>
                {/* 通过 bind() 方法传递参数。 */}
                <a href="https://reactjs.org" onClick={this.preventPop.bind(this,this.state.name)}>Click</a>
            </div>
        );
    }
}


//ReactDOM.render(<Toggle />, document.getElementById("react_toggle_enent_handle_example"))

ReactDOM.render(<Popper />, document.getElementById("react_toggle_enent_handle_example"))