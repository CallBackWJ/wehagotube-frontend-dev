import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Switch from "@material-ui/core/Switch";

const Root = styled.div`
  display: flex;
  flex-direction: column;
  height:100%;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height:3rem;
  font-size:1.1rem;
  background:#AAAAAA44;

`;
const Title = styled.div`
  display: flex;
  color:rgb(50,150,150);
  margin-left:1rem;
`;
const Contents = styled.div`
  flex:1;
  display: flex;
  
`;
const ChatAndLinkBox = props => {
  const [flag, setFlag] = React.useState(false);
  return (
    <Root>
      <Header>
        <Title> {flag ? props.title[0] : props.title[1]}</Title>
        <Switch  checked={flag} color="primary"  onChange={(e)=>{setFlag(e.target.checked)}}/>
      </Header>
      <Contents>{flag ? props.children[0] : props.children[1]}</Contents>
    </Root>
  );
};

ChatAndLinkBox.propTypes = {};

export default ChatAndLinkBox;
