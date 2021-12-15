import * as React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {getAuthUserData, logout} from "../../redux/auth-reducer";

type mapStateToPropsType = {
    isAuth: boolean
    login: string | null
}
type mapDispatchPropsType = {
    getAuthUserData: () => void
    logout: () => void
}
export type  HeaderPropsType = mapStateToPropsType & mapDispatchPropsType

class HeaderContainer extends React.Component<HeaderPropsType> {

    render() {
        return <Header {...this.props}/>
    }
}



const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login
    }
}

export default connect(mapStateToProps, {getAuthUserData, logout})(HeaderContainer);