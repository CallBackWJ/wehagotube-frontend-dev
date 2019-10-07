import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components'

const Root=styled.div`
flex:1;
display:flex;
flex-direction: column;
`
const List=styled.div`
flex:1 0 0;
overflow:auto;
display: flex;
flex-direction: column;`

const Form =styled.div`
display:flex;
align-items: center;
justify-content: center;
height:3rem;
margin-top:auto
`
const ManageLayout = props => {
    return (
        <Root>
            <List>{props.children[0]}</List>
            <Form>{props.children[1]}</Form>
        </Root>
    );
};

ManageLayout.propTypes = {
    
};

export default ManageLayout;