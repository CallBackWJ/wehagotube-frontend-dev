import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import {withRouter} from 'react-router-dom'
const Root = styled.div`
  width: 16.5rem;
  height: 18rem;
  background: rgb(250, 250, 255);
  margin-top: 1rem;
  margin-right: 1rem;
  padding: 1rem;
  border-radius:5px;
  border:1px solid #F0F0F0;
  box-shadow: 0 1px 2px rgba(0, 5, 9, 0.1);
  &:hover{
    border:1px solid rgb(0, 144, 245);
  }
  cursor:pointer;
`;
const VideoImg = styled.img`
  background-size: cover;
  width: 100%;
  height: 8rem;
`;

const Title = styled.div`
  font-weight: 500;
  height: 3rem;
`;

const TimeLinkList = styled.div`
  height: 3.8rem;
  overflow: auto;
  display: flex;
  flex-direction: column;
`;

const TimeLink = styled.div`
  font-size: 0.8rem;
  font-weight: 500;
  line-height: 1.2em;
`;

const Time = styled.span`
  color: #61a5ff;
  margin-right: 0.2rem;
`;
const Context = styled.span`
  color: gray;
`;
const timeFormat = time =>
  `${
    time / 3600 > 9 ? Math.floor(time / 3600) : `0${Math.floor(time / 3600)}`
  }:${time / 60 > 9 ? Math.floor(time / 60) : `0${Math.floor(time / 60)}`}:${
    time % 60 > 9 ? Math.floor(time % 60) : `0${Math.floor(time % 60)}`
  }`;

const Item = props => {
  const handleClick = () => {
    props.history.push(`/watch/${props.id}`);
  };

  const links =
    props.timeLinks &&
    props.timeLinks.map(item => (
      <TimeLink>
        <Time>{timeFormat(item.seek).substring(3)}</Time>
        <Context>{item.desc}</Context>
      </TimeLink>
    ));
  return (
    <Root>
      <VideoImg src={props.thumbnail||"http://saveabandonedbabies.org/wp-content/uploads/2015/08/default.png"} onClick={handleClick} />
      <Title>{props.title}</Title>
      <hr />
      <TimeLinkList>{links}</TimeLinkList>
    </Root>
  );
};

Item.propTypes = {};

export default withRouter(Item);
