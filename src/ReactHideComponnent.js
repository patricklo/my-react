import React, { Component } from 'react';
import ReactDOM from 'react-dom';


class WarningBanner extends React.Component{
    constructor(props){
        super(props);
    }

    render(){

        if (!this.props.warn){
            return null;
        }
        return(
            <div className="warning">WARNING!</div>
        );
    }
}


class Page extends React.Component {
    constructor(props) {
        super(props);
        this.state = {showWarning: true}
        this.handleToggleClick = this.handleToggleClick.bind(this);
    }

    handleToggleClick() {
        this.setState(prevState => ({
            showWarning: !prevState.showWarning
        }));
    }

    render() {
        return (
            <div>
                <WarningBanner warn={this.state.showWarning} />
                <button onClick={this.handleToggleClick}>
                    {this.state.showWarning ? '隐藏' : '显示'}
                </button>
            </div>
        );
    }
}

ReactDOM.render(
    <Page />,
    document.getElementById('react_hide_component_example')
);