import React from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";

const Root = styled.div`
flex:1;
 margin:1.5rem 0 1.5rem 0;
 display:flex;
flex-direction:row;
justify-content:space-between;

`;
const Layout = props => {
    return (
        <Root>{props.children}</Root>
    );
};

Layout.propTypes = {
    
};

export default Layout;