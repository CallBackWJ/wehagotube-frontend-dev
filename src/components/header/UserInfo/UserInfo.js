import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { GoogleLogin } from "react-google-login";
import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { MdExpandMore } from "react-icons/md";
const Login = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 2rem;
  width: 6rem;
  font-weight: 600;
  background: white;
  border-radius: 0rem;
  color: rgb(120, 160, 240);
  margin: 0 0.5rem 0 0.5rem;
`;
const User = styled.div`
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 0.5rem 0 0.5rem;
  
`;

const Avatar = styled.img`
  background-size: cover;
  width: 2rem;
  height: 2rem;
  border-radius: 1rem;
`;
const Name = styled.div`
  font-size: 0.9rem;
  margin-left: 0.5rem;
`;
const UserInfo = props => {
 
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);


  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const options = ["로그아웃", "관리하기"];
  const handleItemClick = item => {
    if (item === "로그아웃") props.logout();
    else if (item === "관리하기") props.manage();
    setAnchorEl(null);
  };
  
  console.log(props.me);
  return (
    <div>
      {props.me ? (
        <User>
          <Avatar src={props.me.avatar} />
          <Name>{props.me.name}</Name>
          <IconButton
            aria-label="more"
            aria-controls="long-menu"
            aria-haspopup="true"
            size="small"
            onClick={handleClick}
          >
            <MdExpandMore />
          </IconButton>
          <Menu
            id="long-menu"
            anchorEl={anchorEl}
            keepMounted
            open={open}
            onClose={handleClose}
            PaperProps={{
              style: {
                maxHeight: 48 * 4.5,
                width: 100
              }
            }}
          >
            {options.map(option => (
              <MenuItem
                key={option}
                selected={option === "관리자"}
                onClick={() => {
                  handleItemClick(option);
                }}
              >
                {option}
              </MenuItem>
            ))}
          </Menu>
        </User>
      ) : (
        <GoogleLogin
          clientId="471063291259-4n327gl2b2rtp7vpcqmghhuk91q86k0h.apps.googleusercontent.com"
          render={renderProps => (
            <Login
              onClick={renderProps.onClick}
              disabled={renderProps.disabled}
            >
              구글 로그인
            </Login>
          )}
          onSuccess={props.login}
          onFailure={props.login}
          scope="profile"
        />
      )}
    </div>
  );
};

UserInfo.propTypes = {};

export default UserInfo;
