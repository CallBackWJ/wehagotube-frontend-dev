import React from "react";
import PropTypes from "prop-types";
import CommonLayout from "../components/common/layout/pages/Common";
import PageLayout from "../components/common/layout/pages/Watch";
import Header from "../containers/Header";
import Youtube from "../components/video/Youtube";
import Info from "../containers/VideoInfo";
import Box from "../components/ChatAndLinkBox";
import TimeLink from "../containers/TimeLinkManage";

const WatchPage = ({ match }) => {
  const { id } = match.params;
  return (
    <CommonLayout>
      <Header />
      <PageLayout>
        <Youtube id={id} width="900" height="450" />
        <Info id={id} />
        <Box title={["실시간 채팅", "타임 링크"]}>
          채팅
          <TimeLink id={id} />
        </Box>
      </PageLayout>
    </CommonLayout>
  );
};
WatchPage.propTypes = {};

export default WatchPage;
