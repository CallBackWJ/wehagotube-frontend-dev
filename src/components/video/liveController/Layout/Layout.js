import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Root = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
const Stepper = styled.div`

`;
const Contoller = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Desc = styled.div`
  display: flex;
`;
const Button = styled.div`
  display: flex;
`;

const Layout = props => {
  return (
    <Root>
      <Stepper>{props.children[0]}</Stepper>
      <Contoller>
        <Desc>{props.children[1]}</Desc>
        <Button>{props.children[2]}</Button>
      </Contoller>
    </Root>
  );
};

Layout.propTypes = {};

export default Layout;
