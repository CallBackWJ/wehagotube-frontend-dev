import React from "react";
import PropTypes from "prop-types";
import CommonLayout from "../components/common/layout/pages/Common";
import Header from "../containers/Header"
import ManageLayout from "../components/common/layout/pages/Manage"
import Finder from "../containers/Finder"
import Calendar from "../containers/Calendar"
import LiveManage from '../containers/LiveManage'
const ManagePage = ({match}) => {
  const {menu,type,keyword,id}=match.params;
  return (
    <CommonLayout>
      <Header/>
      <ManageLayout>
      <Finder menu={menu} type={type} keyword={keyword} id={id} />
      {menu==="schedule"? <Calendar type={type} keyword={keyword} />:menu==="live"?<LiveManage id={id} />:"잘못된 경로"}
      </ManageLayout>
    </CommonLayout>
  );
};

ManagePage.propTypes = {};

export default ManagePage;
