import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components'

const Root =styled.div`
margin:1rem 0 0 3rem;
color:rgb(0,50,100);


`
const Desc = props => {
    return (
        <Root>
            {props.steps[props.state].desc}
        </Root>
    );
};

Desc.propTypes = {
    
};

export default Desc;