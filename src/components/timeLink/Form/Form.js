import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import useInput from "../../../hooks/useInput";
import { MdEdit } from "react-icons/md";
const Root = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  margin: 0.5rem 0.5rem 0.5rem 0.5rem;
  height: 2.5rem;
  background-color: #AAAAAA44;
`;
const Time = styled.label` 
color:white
margin:0.5rem;
font-size:0.8rem;
background:rgb(50,150,150);
border-radius:0.5rem;
padding:0 0.4rem 0 0.4rem;
`;
const Desc = styled.input`
  height: 1.5rem;
  flex: 1;
  margin-right: 0.5rem;
  :disabled {
    opacity: 0.4;
  }
`;
const InsertBtn = styled.div`
  color: rgb(50,150,150);
  display: flex;
  align-items: center;
  font-size: 1.2rem;
  margin: 0 0.5rem 0 auto;
`;

const timeFormat = time =>
  `${
    time / 3600 >= 10 ? Math.floor(time / 3600) : `0${Math.floor(time / 3600)}`
  }:${
    (time % 3600) / 60 >= 10
      ? Math.floor((time % 3600) / 60)
      : `0${Math.floor((time % 3600) / 60)}`
  }:${time % 60 >= 10 ? Math.floor(time % 60) : `0${Math.floor(time % 60)}`}`;

const Form = props => {
  const data = useInput("");
  const handleClick = () => {
    if(props.disabled) return;
    props.onClick(data.value);
    data.setValue("");
  };
  const handleKeyPress=(e)=>{
    if (e.key === "Enter") {
      props.onClick(data.value);
      data.setValue("");
    }
  }
  

  return (
    <Root >
      <Time>{timeFormat(props.seek)}</Time>
      <Desc value={data.value} onChange={data.onChange} disabled={props.disabled} onKeyPress={handleKeyPress}/>
      <InsertBtn>
        <MdEdit onClick={handleClick}  />
      </InsertBtn>
    </Root>
  );
};

Form.propTypes = {};

export default Form;
