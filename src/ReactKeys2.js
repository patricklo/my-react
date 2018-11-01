import React, { Component } from 'react';
import ReactDOM from 'react-dom';


class Blog extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        const sidebar = (
            <ul>
                {this.props.posts.map((post) =>
                    <li key={post.id}>
                        {post.title}
                    </li>
                )}
            </ul>
        );
        const content = this.props.posts.map((post) =>
            <div key={post.id}>
                <h3>{post.title}</h3>
                <p>{post.content}</p>
            </div>
        );
        return (
            <div>
                {sidebar}
                <hr />
                {content}
            </div>
        );
    }


}


const posts = [
    {id: 1, title: 'Hello World', content: 'Welcome to learning React!'},
    {id: 2, title: 'Installation', content: 'You can install React from npm.'}
];
ReactDOM.render(
    <Blog posts={posts} />,
    document.getElementById('react_keys_example2')
);
