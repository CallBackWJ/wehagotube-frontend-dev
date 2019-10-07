import React from "react";
import PropTypes from "prop-types";
import CommonLayout from "../components/common/layout/pages/Common";
import Header from "../containers/Header"
const WatchPage = props => {
  return (
    <CommonLayout>
      <Header/>
     보기 페이지
    </CommonLayout>
  );
};
WatchPage.propTypes = {};

export default WatchPage;
