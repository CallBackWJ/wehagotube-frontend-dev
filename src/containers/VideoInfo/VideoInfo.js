import React from "react";
import PropTypes from "prop-types";
import Layout from "../../components/video/videoInfo/Layout";
import Title from "../../components/video/videoInfo/Title";
import Desc from "../../components/video/videoInfo/Desc";
import ViewCount from "../../components/video/videoInfo/ViewCount";
import StatusBar from "../../components/video/videoInfo/StatusBar";
import LinearProgress from "@material-ui/core/LinearProgress";
import { SCHEDULE } from "../../graphql/schedule";
import { useQuery } from "react-apollo-hooks";

const VideoInfo = props => {
  const { data, error, loading } = useQuery(SCHEDULE, {
    variables: { id: props.id }
  });
  if (loading) return <LinearProgress variant="query" />;
  if (error) return "error";

  return (
    <Layout>
      <StatusBar status={data.schedule.status} />
      <Title>{data.schedule.title}</Title>
      <Desc>{data.schedule.desc}</Desc>
      <ViewCount
        status={data.schedule.status}
        count={data.schedule.viewCount}
      />
    </Layout>
  );
};

VideoInfo.propTypes = {};

export default VideoInfo;
