import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components'


const Root = styled.div`
  flex: 1;
  display: flex;
  margin-left:auto;
  margin-right:auto;
  
`;

const Component = styled.div`
  min-width: 70rem;
  max-width: 70rem;
  display: flex;
  flex-direction: column;
`;
const Title = styled.div`
  margin-top: 1rem;
`;
const Search = props => {
    return (
        <Root>
        <Component>
          <Title>{props.title==="NONE"?`"" 검색결과`:`"${props.title}" 검색결과`}</Title>
          {props.children}
        </Component>
      </Root>
    );
};

Search.propTypes = {
    
};

export default Search;