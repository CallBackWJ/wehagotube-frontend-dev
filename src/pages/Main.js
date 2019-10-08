import React from "react";
import PropTypes from "prop-types";
import CommonLayout from "../components/common/layout/pages/Common";
import Header from "../containers/Header";
import Schedule from "../containers/MainSchedule";
import ContainerLayout from "../components/common/layout/containers/Common";
import PageLayout from "../components/common/layout/pages/Main";
const MainPage = props => {
  return (
    <CommonLayout>
      <Header />
      <PageLayout>
        <ContainerLayout title="방송 스케줄">
          <Schedule />
        </ContainerLayout>
        <hr />
        <ContainerLayout title="지난 방송 다시보기">
          방송들...
        </ContainerLayout>
      </PageLayout>
    </CommonLayout>
  );
};

MainPage.propTypes = {};

export default MainPage;
