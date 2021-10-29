import * as React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {setAuthUserData} from "../../redux/auth-reducer";
import {authAPI} from "../../API/api";


export type  HeaderPropsType = mapStateToPropsType & mapDispatchPropsType

class HeaderContainer extends React.Component<HeaderPropsType> {
    componentDidMount() {
        authAPI.me().then(data => {
            let {id, login, email} = data.data
            if (data.resultCode === 0) {
                this.props.setAuthUserData(id, email, login)
            }
        })
    }

    render() {
        return <Header {...this.props}/>
    }
}

type mapStateToPropsType = {
    isAuth: boolean
    login: string | null
}
type mapDispatchPropsType = {
    setAuthUserData: (id: number, email: string, login: string) => void
}

const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login
    }
}

export default connect(mapStateToProps, {setAuthUserData})(HeaderContainer);