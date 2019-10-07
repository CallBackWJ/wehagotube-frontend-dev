import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components'

const Root =styled.div`
margin-top: 1rem;
font-weight: 700;
`
const Title = props => {
    return (
        <Root>
                 {props.children}
        </Root>
    );
};

Title.propTypes = {
    
};

export default Title;