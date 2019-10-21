import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Img from '../../../images/loading.png'
const Root = styled.div`
  height:100%;
  display: flex;
  margin-left:auto; 
  margin-right:auto;
  justify-content: center;
  align-items: center;
  min-height: 70px;

`;

const Box = styled.div`
  display: flex;
  align-items: center;
`;
const Spinner = styled.img`

  height: 70px;
  animation: spinner 1.2s steps(12) infinite;
  @keyframes spinner {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

const Loading = props => {
  return (
    <Root>
      <Box>
        <Spinner src={Img} />
      </Box>
    </Root>
  );
};

Loading.propTypes = {};

export default Loading;
