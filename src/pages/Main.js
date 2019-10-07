import React from "react";
import PropTypes from "prop-types";
import CommonLayout from "../components/common/layout/pages/Common";
import Header from "../containers/Header"

const MainPage = props => {
  return (
    <CommonLayout>
      <Header/>
     {[" 메인 페이지","내용"]}
    </CommonLayout>
  );
};

MainPage.propTypes = {};

export default MainPage;
