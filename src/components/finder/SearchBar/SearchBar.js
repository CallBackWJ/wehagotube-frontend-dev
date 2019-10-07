import React from "react";
import PropTypes from "prop-types";
import HeaderSearch from "../../header/SearchBar";
import styled from "styled-components";
import useInput from "../../../hooks/useInput";
const Root = styled.div`
display: flex;
width:100%;
background:white;
`;
const Select = styled.select`
  height: 2rem;
  border: none;
  margin-right:0.3rem;
  background-color: white;
`;

const Option = styled.option``;


const SearchBar = props => {

  const type = useInput(props.type);
  
  const handleClick=(keyword)=>{
      props.onClick(type.value,keyword);
  }
  return (
    <Root>
      <Select onChange={type.onChange} defaultValue={props.type}>
        <Option value="all">전체 </Option>
        <Option value="title">제목 </Option>
        <Option value="desc">내용</Option>
      </Select>
      <HeaderSearch onClick={handleClick} />
    </Root>
  );
};

SearchBar.propTypes = {};

export default SearchBar;
