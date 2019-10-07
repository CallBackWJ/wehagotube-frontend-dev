import React from "react";
import YouTube from "react-youtube";
import PropTypes from "prop-types";
import styled from "styled-components";
import { useVideoContext } from "../../../contexts/VideoContext";
import {VIDEO} from "../../../graphql/video";
import { useQuery } from "react-apollo-hooks";
const GuideMessage = styled.div`
  width: ${props => props.width+"px"};
  height: ${props => props.height+"px"};
  background: rgb(240,240,240);
  display:flex;
  justify-content: center;
  align-items: center;
`;

const Youtube = props => {


  const opts = {
    height: props.height,
    width: props.width,
    playerVars: {
      autoplay: 1
    }
  };

  const { setSeek, setYoutube } = useVideoContext();

  const onReady = event => {
    setYoutube(event.target);
  };
  const onStateChange = e => {
    console.log(e.data)
    if (e.data === 2) {
      setSeek(e.target.getCurrentTime());
    }
    if (e.data === 1) {
      setSeek(0);
    }
  };

  const { data, error, loading ,refetch} = useQuery(VIDEO, {
    variables: { schedule_id: props.id }
  });

  if (loading) return "loading"
  if (error) return "error";
  const status=(data.video)?data.video.schedule.status:"RESERVED";
  const videoId=(data.video)?data.video.youtubeId:"Z9_-4d3LDw0";


  if (status === "LIVE" || status === "PUBLISHED")
    return (
      <YouTube
        videoId={videoId}
        opts={opts}
        onReady={onReady}
        onStateChange={onStateChange}
      />
    );
  else return <GuideMessage width={props.width} height={props.height}>{status}</GuideMessage>;
};

Youtube.propTypes = {};

export default Youtube;
