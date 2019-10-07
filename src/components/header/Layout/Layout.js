import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
const Root = styled.div`
  display: flex;
  height: 100%;
  justify-content: space-between;
  align-items: center;
  background: rgb(0, 144, 245);
`;
const Left = styled.div`
  display: flex;
`;
const Right = styled.div`
  display: flex;
`;
const Layout = props => {
  return (
    <Root>
      <Left>{props.children[0]}</Left>
      <Right>
        {props.children[1]}
        {props.children[2]}
      </Right>
    </Root>
  );
};

Layout.propTypes = {};

export default Layout;
