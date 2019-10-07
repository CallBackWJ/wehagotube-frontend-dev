import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components'

const Root =styled.div`
font-weight: 300;
margin-bottom: 1rem;
`
const Desc = props => {
    return (
        <Root>
                 {props.children}
        </Root>
    );
};

Desc.propTypes = {
    
};

export default Desc;