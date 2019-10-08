import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
const Root = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Page = styled.div`
  display: flex;
  height: 100%;
  width: 86rem;
  justify-content: center;
  align-items: center;
`;

const Finder = styled.div`
  height: 44rem;
  width: 18rem;
`;

const Contents = styled.div`
  height: 44rem;
  width: 68rem;
`;
const Manage = props => {
  return (
    <Root>
      <Page>
      <Finder>{props.children[0]}</Finder>
      <Contents>{props.children[1]}</Contents>
      </Page>
    </Root>
  );
};

Manage.propTypes = {};

export default Manage;
