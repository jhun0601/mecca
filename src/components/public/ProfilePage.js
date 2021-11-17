import React from "react";
import { connect } from "react-redux";

export class ProfilePage extends React.Component {
    render() {
        return (
            <div>
                <div className="page-header">
                    <div className="content-container">
                        <h1 className="page-header__title">Profile</h1>
                    </div>
                </div>
                <div className="content-container">
                    <form></form>
                </div>
            </div>
        );
    }
}

export default ProfilePage;
