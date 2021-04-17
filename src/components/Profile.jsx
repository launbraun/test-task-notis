import React from "react";
import {connect} from "react-redux";
import {withAuthRedirect} from "../hoc/withAuthRedirect";
import {compose} from "redux";



class Profile extends React.Component {


    render() {
        return (
            <div className={'profile'}>
            <h1>Здравствуйте!</h1>
             <div className={'user'}> {this.props.email}</div>
            </div>
        )
    }
}

let mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    email: state.auth.email
});

export default compose( connect(mapStateToProps, {}), withAuthRedirect)(Profile)


