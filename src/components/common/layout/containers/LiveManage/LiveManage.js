import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Root = styled.div`
  height: 100%;
  display: flex;
`;
const Video = styled.div`
  flex: 2;

  display: flex;
  flex-direction: column;
  margin-right:2rem;
  margin-left:2rem;
`;
const Controller = styled.div`
  flex: 0.2;
  background: rgb(240,240,255);
  display: flex;
`;
const Youtube = styled.div`
  flex: 0.5;
  //background: rgb(240,255,240);
  display: flex;
  justify-content: center;
  align-items: center;
`;
const VideoInfo = styled.div`
  flex: 0.3;
  background: rgb(255,240,240);
  display: flex;
`;

const Chat = styled.div`
  flex: 1;
  background: rgb(220,250,255);
`;

const LiveManage = props => {
  return (
    <Root>
      <Video>
        <Controller>{props.children[0]}</Controller>
        <Youtube>{props.children[1]}</Youtube>
        <VideoInfo>{props.children[2]}</VideoInfo>
      </Video>
      <Chat>{props.children[3]}</Chat>
    </Root>
  );
};

LiveManage.propTypes = {};

export default LiveManage;
