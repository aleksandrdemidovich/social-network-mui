import React from 'react';
import {currentTime} from "../../../Profile/RightColumn/Posts/Post/Post";
import {styled} from "@mui/material/styles";
import {Grid} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";


const ReceivedMessageContainer = styled(Grid)`
  display: flex;
  flex-direction: row;
  padding: 10px 20px;
  align-items: flex-end;
  img {
    width: 50px;
    height: 50px;
    border-radius: 25px;
    margin-right: 13px;
  };
  p{
    border: 1px solid #3f51b5;
    margin-right: 10px;
    color: #686868;
    width: auto;
    padding: 10px 15px 0 15px;
    border-radius: 15px;
  };
  div{
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    font-size: 14px;
    padding-bottom: 3px;
  };
  & svg {
    visibility: hidden;
    margin-right: 10px;
    margin-left: auto;
    position: relative;
    bottom: 50%;
  } ;
  :hover {
    cursor: pointer;
    & svg {
      visibility: visible;
      margin-right: 10px;
      margin-left: auto;
      opacity: 0.6;
    };
  } ;
,
`;


function ReceivedMessage() {

    return (
        <ReceivedMessageContainer >
            <img src="https://avatarfiles.alphacoders.com/169/169302.jpg" alt="userAvatar"/>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea illum, molestias quibusdam rem repellat sapiente? Amet consequatur corporis cum, et ipsam magni, nemo obcaecati quos saepe, sed sint tempora totam!
                <div>{currentTime()}</div>
            </p>
            <CheckCircleIcon color={"primary"}/>
        </ReceivedMessageContainer>
    );
}

export default ReceivedMessage;