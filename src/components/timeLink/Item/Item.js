import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { MdClose } from "react-icons/md";
const Root = styled.div`
  display: flex;
  margin: 0.3rem;
  background-color: #ffffff77;
  align-items: center;
  padding: 0.25rem 0.5rem 0.2rem 0.5rem;
  &:hover {
    background-color: #ffffffff;
  }
`;
const Del = styled.div`
  display: flex;
  align-items: center;
  color: gray;
  margin-left: auto;
  &:hover {
    color: red;
    
  }
`;
const Seek = styled.label`
  display: flex;
  align-items: center;
  color: #0090f5;
  margin-right: 1rem;
  width: 4.5rem;
  font-size: 0.8rem;
`;
const Desc = styled.label`
display: flex;
  align-items: center;
  font-size: 0.8rem;
`;

const timeFormat = time =>
`${
  time / 3600 >= 10 ? Math.floor(time / 3600) : `0${Math.floor(time / 3600)}`
}:${(time % 3600) / 60 >= 10 ? Math.floor((time % 3600) / 60) : `0${Math.floor((time % 3600)  / 60)}`}:${
  time % 60 >= 10 ? Math.floor(time % 60) : `0${Math.floor(time % 60)}`
}`;

const Item = props => {
  const handleSeek=()=>{
    props.seekTo(props.seek)
  }
  return (
    <Root  onClick={handleSeek}>
      <Seek>{timeFormat(props.seek)}</Seek>
      <Desc>{props.desc}</Desc>
      <Del>
        <MdClose onClick={() => props.onClick(props.id)} />
      </Del>
    </Root>
  );
};

Item.propTypes = {};

export default Item;
