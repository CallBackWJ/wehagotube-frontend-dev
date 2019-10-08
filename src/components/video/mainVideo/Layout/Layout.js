import React from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";

const Root = styled.div`
  flex: 1;
  margin-top: 1.5rem;
  display: flex;
  flex-direction: column;
`;
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