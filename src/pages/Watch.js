import React from "react";
import PropTypes from "prop-types";
import CommonLayout from "../components/common/layout/pages/Common";
import PageLayout from "../components/common/layout/pages/Watch";
import Header from "../containers/Header";
import Youtube from "../components/video/Youtube";
import Info from "../containers/VideoInfo";
import Box from "../components/ChatAndLinkBox";
import TimeLink from "../containers/TimeLinkManage";
import LiveChat from "../components/video/LiveChat"
import { useSubscription } from "react-apollo-hooks";
import { PUBSUB_SCHEDULE } from "../graphql/schedule";
const WatchPage = ({ match }) => {
  const { id } = match.params;
  const {data,error,loading}=useSubscription(PUBSUB_SCHEDULE);
  if(!loading){
    if(data.pubsubSchedule){
      if(data.pubsubSchedule.id===id){
        console.log("data::",data);
        window.location.reload();
      }
    }
   
  }
  return (
    <CommonLayout>
      <Header />
      <PageLayout>
        <Youtube id={id} width="900" height="450" />
        <Info id={id} />
        <Box title={["실시간 채팅", "타임 링크"]}>
          <LiveChat id={id} />
          <TimeLink id={id} />
        </Box>
      </PageLayout>
    </CommonLayout>
  );
};
WatchPage.propTypes = {};

export default WatchPage;
