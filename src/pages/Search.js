import React from "react";
import PropTypes from "prop-types";
import CommonLayout from "../components/common/layout/pages/Common";
import Header from "../containers/Header"
import PageLayout from '../components/common/layout/pages/Search'
import Search from '../containers/SearchVideo'
const SearchPage = ({match}) => {
  const { keyword } = match.params;
  return (
    <CommonLayout>
      <Header keyword={keyword}/>
      <PageLayout title={keyword}>
        <Search keyword={keyword}/>
      </PageLayout>
    </CommonLayout>
  );
};
SearchPage.propTypes = {};

export default SearchPage;
