import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {ProfileType, setUserProfile} from "../../redux/profile-reducer";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {profileAPI} from "../../API/api";


type PathParamsType = {
    userId: string
}
type mapStateToPropsType = {
    profile: ProfileType
}
type mapDispatchPropsType = {
    setUserProfile: (profile: ProfileType) => void
}
export type  ProfilePropsType = mapStateToPropsType & mapDispatchPropsType
type PropsType = RouteComponentProps<PathParamsType> & ProfilePropsType

class ProfileContainer extends React.Component<PropsType> {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId){
            userId = '20060'
        }
        profileAPI.getProfile(userId)
            .then(data => {
                this.props.setUserProfile(data)
            });
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile}/>
        );
    }
}

let mapStateToProps = (state: AppStateType) : mapStateToPropsType => ({
    profile: state.profilePage.profile
})

const WithURLDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps,{setUserProfile})(WithURLDataContainerComponent);
