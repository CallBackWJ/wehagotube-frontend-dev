import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { MdKeyboardArrowDown } from "react-icons/md";
import { MdKeyboardArrowUp } from "react-icons/md";
import IconButton from "@material-ui/core/IconButton";
const Root = styled.div`
  flex: 1;
  margin-top: 1.5rem;
  display: flex;
  flex-direction: column;

`;

const More=styled.div`
display:flex;
margin-left:auto;
margin-right:auto;
`
const Layout = props => {
  return (
    <Root>
      {props.children}
      <More>
        <IconButton onClick={()=>props.onClick(props.disabled)}>
          {props.disabled?<MdKeyboardArrowUp />:<MdKeyboardArrowDown />}
        </IconButton>
      </More>
    </Root>
  );
};

Layout.propTypes = {};

export default Layout;
