import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components'

const Root =styled.div`
height:100%;
display: flex;
flex-direction: column;
padding:1.5rem;
`
const Layout = props => {
    return (
        <Root>
            {props.children}
        </Root>
    );
};

Layout.propTypes = {
    
};

export default Layout;