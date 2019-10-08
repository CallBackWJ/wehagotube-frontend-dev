import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Root = styled.div`
  margin-left: auto;
  margin-right: auto;
  margin-top: 2rem;
  max-width: 80rem;
  display: flex;
`;
const Video = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  margin:1rem;

`;
const Youtube = styled.div`
  flex: 1;
  display: flex;

`;
const Info=styled.div`
flex: 1;
display: flex;

`
const ChatAndLink = styled.div`
  max-width: 22rem;
  min-width: 22rem;
  height: 85vh;
  background: rgb(220,250,255);
  margin:1rem;
`;
const Watch = props => {
  return (
    <Root>
      <Video>
        <Youtube>{props.children[0]}</Youtube>
        <Info>{props.children[1]}</Info>
      </Video>
      <ChatAndLink>{props.children[2]}</ChatAndLink>
    </Root>
  );
};

Watch.propTypes = {};

export default Watch;
