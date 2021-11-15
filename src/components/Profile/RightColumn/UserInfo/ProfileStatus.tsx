import React from 'react';
import {IconButton, Input, styled, Tooltip} from "@mui/material";


type ProfileStatusPropsType = {
    status: string
    updateStatus: (status: string) => void
}

class ProfileStatus extends React.Component<ProfileStatusPropsType> {

    state = {
        editMode: false,
        status: this.props.status
    }

    activateEditMode = () => {
        this.setState({
            editMode: true
        })
    }

    deactivateEditMode = () => {
        this.setState({
            editMode: false
        })
        this.props.updateStatus(this.state.status)
    }
    onStatusChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({
            status: e.currentTarget.value
        })
    }

    componentDidUpdate(prevProps: Readonly<ProfileStatusPropsType>, prevState: Readonly<{}>, snapshot?: any) {
        if(prevProps.status !== this.props.status){
            this.setState({
                status: this.props.status
            })
        }
    }


    render() {
        return (
            <div>
                {this.state.editMode
                    ? <Input style={{width: '95%'}} onChange={this.onStatusChange} placeholder={'Set status'} value={this.state.status} autoFocus
                             onBlur={this.deactivateEditMode}/>
                    : <Tooltip title="Use double click to change your status" placement={'bottom-start'}>
                        <StyledStatus onDoubleClick={this.activateEditMode}>
                            {this.props.status ? this.props.status : 'default status'}
                        </StyledStatus>
                    </Tooltip>
                }
            </div>
        )
    }
}

export default ProfileStatus;

const StyledStatus = styled('div')`
  margin-right: 20px;
  :hover{
    background-color: gray;
    opacity: 0.3;
  }
`