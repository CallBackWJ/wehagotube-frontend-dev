import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
const Root = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
`;
const EmptyLayout = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;

`;
const Empty = styled.img`
  width: 18rem;
  height: 15rem;
  background-size: cover;
`;

const Layout = props => {
  if (props.children.length === 0) {
    return (
      <EmptyLayout>
        <Empty
          src={
            "https://www.goodoc.co.kr/assets/mobile/hospitals/img_keyword_no_result_choi-e425aaa69403725ab8c465b04a77828d.png"
          }
        />
      </EmptyLayout>
    );
  } else {
    return <Root>{props.children}</Root>;
  }
};

Layout.propTypes = {};

export default Layout;
