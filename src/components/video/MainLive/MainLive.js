import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { withRouter } from "react-router-dom";

const Panel = styled.div`
  width: 100%;
  height: 12rem;
  background: rgb(238, 238, 238);
`;
const Tamplate = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: 70rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Video = styled.div`
  flex: 1.5;

`;
const Desc = styled.div`
  flex: 4;

`;
const Play = styled.div`
  flex: 1.5;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;


`;
const ButtonImg = styled.div`
  width: 3rem;
  height: 3rem;
  margin-left: 1rem;
  background: url(https://image.flaticon.com/icons/png/512/26/26025.png);
  background-size: cover;
`;
const MainLive = props => {
  const handleClick = () => {
    props.history.push(`/watch/${props.id}`);
  };
  return (
    <Panel>
      <Tamplate>
        <Video>
        {props.children[0]}
        </Video>
        <Desc>
        {props.children[1]}
        </Desc>
        <Play onClick={handleClick}>
          바로가기
          <ButtonImg />
        </Play>
      </Tamplate>
    </Panel>
  );
};
MainLive.propTypes = {};

export default withRouter(MainLive);
