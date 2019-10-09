import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { MdSearch } from "react-icons/md";
import useInput from "../../../hooks/useInput";

const Root = styled.div`
  display: flex;
  margin-right: 1rem;
  background: white;
`;

const Input = styled.input`
  width: 12rem;
  height: 2rem;
  font-size: 1rem;
  border: none;
  padding: 0.5rem;
  font-size: 0.8rem;
  outline: none;
`;

const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover{
    color:rgb(0, 144, 245);
  }
`;
const SearchBar = props => {
  const keyword = useInput(props.keyword==="NONE"?"":props.keyword);

  const handleKeyPress = e => {
    if (e.key === "Enter") {
      props.onClick(keyword.value);
    }
  };
  const handleClick = e => {
    props.onClick(keyword.value);
  };
  return (
    <Root>
      <Input
        placeholder={props.placeholder || "검색어를 입력해주세요"}
        value={keyword.value}
        onChange={keyword.onChange}
        onKeyPress={handleKeyPress}
        
      />
      <Button>
        <MdSearch size="1.5rem" onClick={handleClick} />
      </Button>
    </Root>
  );
};

SearchBar.propTypes = {};

export default SearchBar;
