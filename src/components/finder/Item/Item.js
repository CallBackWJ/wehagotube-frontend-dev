import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
const Root = styled.div`
  padding: 0.25rem;
  height: 6rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  background: rgb(245, 245, 245);
  margin-bottom: 0.3rem;
`;
const Title = styled.div`
  font-weight: 500;
  min-height: 1.5rem;
  font-size: 1rem;
`;
const Desc = styled.div`
  min-height: 3rem;
  background: rgb(200, 200, 200);
  font-size: 0.8rem;
  color: rgb(120, 120, 120);
`;
const Schedule = styled.div`
  display: flex;
  font-size: 0.6rem;
  justify-content: space-between;
  align-items: center;
`;
const Hour = styled.div`
  color: blue;
`;
const Time = styled.div``;
const Status = styled.div``;
const Item = props => {
  const handleClick=()=>{
    props.onClick(props.id)
  }
  return (
    <Root onClick={handleClick}>
      <Title>{props.title}</Title>
      <Desc>{props.desc}</Desc>
      <Schedule>
        <Time>{props.time}</Time>
        <Hour>{props.hour}분</Hour>
        <Status>{props.status}</Status>
      </Schedule>
    </Root>
  );
};

Item.propTypes = {};

export default Item;
