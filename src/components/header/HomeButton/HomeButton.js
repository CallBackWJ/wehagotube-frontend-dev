import React from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";
const Root = styled.label`
  margin-left: 1rem;
  font-size: 1.2rem;
  font-weight: 350;
  color: white;
`;
const HomeButton = props => {
    return  (
        <Root
          onClick={props.onClick}
        >
          {props.home}
        </Root>
      );
};

HomeButton.propTypes = {
    
};

export default HomeButton;