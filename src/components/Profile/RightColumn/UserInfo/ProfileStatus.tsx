import React, {useEffect, useState} from 'react';
import {Input, styled, Tooltip} from "@mui/material";


type ProfileStatusPropsType = {
    status: string
    updateStatus: (status: string) => void
    isOwner: boolean
}

const ProfileStatusWithHooks =  (props: ProfileStatusPropsType) => {

    const [editMode, setEditMode] = useState(false)
    const [status, setStatus] = useState(props.status)

    useEffect(() => {
        setStatus(props.status)
    }, [props.status])


    const activateEditMode = () => {
        setEditMode(true)
    }

    const deactivateEditMode = () => {
        setEditMode(false)
        props.updateStatus(status)
    }
    const onStatusChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setStatus(e.currentTarget.value)
    }

    if(!props.isOwner){
        return (
            <div style={{marginRight:'20px'}}>
                {status ? status : 'Set status'}
            </div>
        )
    }

    return (
        <div>
            {editMode
                ? <Input style={{width: '95%'}} onChange={onStatusChange} placeholder={'Set status'} value={status} autoFocus
                         onBlur={deactivateEditMode}/>
                : <Tooltip title="Use double click to change your status" placement={'bottom-start'}>
                    <StyledStatus onDoubleClick={activateEditMode}>
                        {status ? status : 'Set status'}
                    </StyledStatus>
                </Tooltip>
            }
        </div>
    )
}

export default ProfileStatusWithHooks;

const StyledStatus = styled('div')`
  margin-right: 20px;
  :hover{
    background-color: gray;
    opacity: 0.3;
  }
`