import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
const Root = styled.div`
  width: 98%;
  display: flex;
  flex-direction: column;
  margin: 0.2rem;
`;

const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgb(20, 110, 170);
  border-radius: 0.2rem 0.2rem 0 0;
  &:hover{
    background:rgb(0, 90, 150);
  }
`;
const Title = styled.div`
  font-weight: 500;
  font-size: 1rem;
  color: white;
  margin: 0.2rem;
`;
const Status = styled.div`
  height: 1rem;
  width: 2rem;

  font-weight: 600;
  font-size: 0.5rem;

  background: white;
  color: rgb(0, 90, 150);

  display: flex;
  justify-content: center;
  align-items: center;

  margin-left: auto;
  margin-right: 0.3rem;
  border-radius: 0.3rem;
`;
const Desc = styled.div`
  min-height: 2rem;
  background: #f5f5f5;
  font-size: 0.8rem;
  color: rgb(120, 120, 120);
`;
const Schedule = styled.div`
  display: flex;
  font-size: 0.6rem;
  justify-content: space-between;
  align-items: center;
  background: white;
  border-radius: 0 0 0.2rem 0.2rem;

  &:hover{
    background:rgb(240, 245, 250);
  }
`;
const Hour = styled.div`
  color: rgb(0, 90, 150);
  margin-right: 0.6rem;
`;
const Time = styled.div`
  margin-left: 0.2rem;
`;

const Item = props => {
  const status = {
    RESERVED: "예약",
    READY: "준비",
    LIVE: "방송",
    COMPLETED: "완료",
    PUBLISHED: "배포"
  };

  const handleClick = () => {
    props.onClick(props.id);
  };

  const [open,setOpen]=React.useState(false);
  return (
    <Root>
      <Header  onClick={handleClick}>
        <Title>{props.title}</Title>
        <Status>{status[props.status]}</Status>
      </Header>
      {open?<Desc>{props.desc}</Desc>:null}
      {/* <Desc>{props.desc}</Desc> */}
      <Schedule onClick={()=> setOpen(!open)}>
        <Time>{props.time}</Time>
        <Hour>{props.hour}분</Hour>
      </Schedule>
    </Root>
  );
};

Item.propTypes = {};

export default Item;
