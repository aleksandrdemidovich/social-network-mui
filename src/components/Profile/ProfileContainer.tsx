import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {getUserProfile, ProfileType} from "../../redux/profile-reducer";
import {Redirect, RouteComponentProps, withRouter} from "react-router-dom";


type PathParamsType = {
    userId: string
}
type mapStateToPropsType = {
    profile: ProfileType
    isAuth: boolean
}
type mapDispatchPropsType = {
    getUserProfile:(userId: string) => void
}
export type  ProfilePropsType = mapStateToPropsType & mapDispatchPropsType
type PropsType = RouteComponentProps<PathParamsType> & ProfilePropsType

class ProfileContainer extends React.Component<PropsType> {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId){
            userId = '20060'
        }
        this.props.getUserProfile(userId)
    }

    render() {
        if(!this.props.isAuth) return <Redirect to={'/login'}/>

        return (
            <Profile {...this.props} profile={this.props.profile}/>
        );
    }
}

let mapStateToProps = (state: AppStateType) : mapStateToPropsType => ({
    profile: state.profilePage.profile,
    isAuth: state.auth.isAuth
})

const WithURLDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps,{getUserProfile})(WithURLDataContainerComponent);
