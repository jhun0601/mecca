import React from "react";
import { connect } from "react-redux";
import PostForm from "../form/PostForm";

export class PostPage extends React.Component {
    onSubmit = () => {
        alert("submit");
    };
    render() {
        return (
            <div>
                <div className="page-header">
                    <div className="content-container">
                        <h1 className="page-header__title">Create Post</h1>
                    </div>
                </div>
                <div className="content-container">
                    <PostForm onSubmit={this.onSubmit} />
                </div>
            </div>
        );
    }
}

export default PostPage;
