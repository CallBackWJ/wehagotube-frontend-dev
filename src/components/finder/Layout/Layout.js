import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Root = styled.div`
  display: flex;
  flex-direction: column;
  background: #3399ff33;
 //background:#DADAD;
`;
const Menu = styled.div`
  display: flex;
  height: 2.5rem;
`;
const SearchBar = styled.div`
  display: flex;
  height: 2rem;
`;
const List = styled.div`
  height: 39.5rem;
  overflow: auto;
  display: flex;
  flex-direction: column;
  
`;
const Layout = props => {
  return (
    <Root>
      <Menu>{props.children[0]}</Menu>
      <SearchBar>{props.children[1]}</SearchBar>
      <List>{props.children[2]}</List>
    </Root>
  );
};

Layout.propTypes = {};

export default Layout;
