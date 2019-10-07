import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Root = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`;
const Header = styled.div`
  height: 3rem;
`;
const Contents = styled.div`
  flex: 1;
  display: flex;
  margin-left: auto;
  margin-right: auto;

`;

const Common = props => {
  return (
    <Root>
      <Header>{props.children[0]}</Header>
      <Contents>{props.children[1]}</Contents>
    </Root>
  );
};

Common.propTypes = {};

export default Common;
