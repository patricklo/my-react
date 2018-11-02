import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class FlavorForm extends React.Component{
    constructor(props) {
        super(props);
        this.state = {value:'coconut'};
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event){
        this.setState({value:event.target.value});
    }

    handleSubmit(event){
        alert('your favorite flavor is '+this.state.value);
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <label>
                    chose favorite website:
                    <select value={this.state.value} onChange={this.handleChange}>
                        <option value="gg">google</option>
                        <option value="rn">Runoob</option>
                        <option value="tb">taobao</option>
                        <option value="fb">facebook</option>
                        <option value="ba">baidu</option>
                    </select>
                </label>
                <input type="submit" value="Commit"></input>
            </form>
        )
    }
}

ReactDOM.render(<FlavorForm/>, document.getElementById("react_select_example"))