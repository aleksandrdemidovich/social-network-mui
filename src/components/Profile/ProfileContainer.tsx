import React from 'react';
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {ProfileType, setUserProfile} from "../../redux/profile-reducer";
import {ProfileResponseAPIType} from "../../APIResponseType/ProfileResponsAPIType";
import {RouteComponentProps, withRouter} from "react-router-dom";


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
        axios.get<ProfileResponseAPIType>(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
            .then(response => {
                this.props.setUserProfile(response.data)
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
