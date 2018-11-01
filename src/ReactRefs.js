import React, { Component } from 'react';
import ReactDOM from 'react-dom';


class MyComponent extends React.Component{
    handleClick(){
        // 使用原生的 DOM API 获取焦点
        this.refs.myInput.focus();
    }

    render(){
        //  当组件插入到 DOM 后，ref 属性添加一个组件的引用于到 this.refs
        return (
            <div>
                <input type="text" ref="myInput"/>
                <input type="button" value="click for focus" onClick={this.handleClick.bind(this)}/>
            </div>
        );
    }
}



ReactDOM.render(<MyComponent/>, document.getElementById('react_refs_example'))