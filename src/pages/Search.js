import React from "react";
import PropTypes from "prop-types";
import CommonLayout from "../components/common/layout/pages/Common";
import Header from "../containers/Header"
const SearchPage = ({match}) => {
  const { keyword } = match.params;
  return (
    <CommonLayout>
      <Header keyword={keyword}/>
      검색 페이지
    </CommonLayout>
  );
};
SearchPage.propTypes = {};

export default SearchPage;
