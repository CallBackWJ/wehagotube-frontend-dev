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
          <iframe
            allowfullscreen=""
            frameborder="0"
            height="640"
            src="https://www.youtube.com/live_chat?v=FITIjng4RDg&embed_domain=wehagotube-frontend-dev.netlify.com"
            width="480"
          ></iframe>

          <TimeLink id={id} />
        </Box>
      </PageLayout>
    </CommonLayout>
  );
};
WatchPage.propTypes = {};

export default WatchPage;
