import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class MailBox extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        const unreadMessages = this.props.unreadMessages;
        return(
            <div>
                <h1>Hello!</h1>
                {unreadMessages.length > 0 &&
                <h2>
                    您有 {unreadMessages.length} 条未读信息。
                </h2>
                }
            </div>
        )
    }
}

const messages = ['React','Re: React','Re:Re: React'];
ReactDOM.render(
    <MailBox unreadMessages={messages}/>,
    document.getElementById("react_operator_example")
)