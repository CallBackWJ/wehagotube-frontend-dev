import React from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";

const Root =styled.button`
display:flex;
width:100%;
background: rgb(0, 144, 245);
color:white;
font-size:1.2rem;
justify-content: center;
align-items: center;

`

const Menu = props => {
    return (
        <Root onClick={()=>props.onClick("schedule")}>
          스케줄 보기
        </Root>
    );
};

Menu.propTypes = {
    
};

export default Menu;