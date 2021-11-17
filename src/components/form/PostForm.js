import React from "react";

class PostForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            broadcastText: "",
            error: "",
        };
    }
    onChangeBroadcast = (e) => {
        // e.preventDefault();
        const broadcastText = e.target.value;
        this.setState({ broadcastText });
    };
    onSubmit = (e) => {
        e.preventDefault();
        if (!this.state.broadcastText) {
            this.setState(() => ({
                error: "Please provide text",
            }));
        } else {
            this.setState(() => ({ error: "" }));
        }
    };
    render() {
        return (
            <form className="form" onSubmit="">
                {this.state.error && (
                    <p className="form__error">{this.state.error}</p>
                )}
                <textarea
                    value={this.state.broadcastText}
                    className="textarea"
                    placeholder="What do you want to talk about?"
                    onChange={this.onChangeBroadcast}
                />
                <div>
                    <button className="button">Post</button>
                </div>
            </form>
        );
    }
}

export default PostForm;
