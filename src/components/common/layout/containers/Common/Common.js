import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Root = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  
`;

const Component = styled.div`
  min-width: 70rem;
  max-width: 70rem;
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
`;
const Title = styled.div`
  margin-top: 1rem;
  margin-bottom: 1rem;
`;

const Common = props => {
  return (
    <Root>
      <Component>
        <Title>{props.title}</Title>
        {props.children}
      </Component>
    </Root>
  );
};

Common.propTypes = {};

export default Common;
