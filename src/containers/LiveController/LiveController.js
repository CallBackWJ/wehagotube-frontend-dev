import React from "react";
import PropTypes from "prop-types";
import Layout from "../../components/video/liveController/Layout";
import Stepper from "../../components/video/liveController/Stepper";
import Desc from "../../components/video/liveController/Desc";
import Button from "../../components/video/liveController/Button";
import { CREATE_VIDEO, VIDEO, STREAMING } from "../../graphql/video";
import { useQuery, useMutation } from "react-apollo-hooks";
import LinearProgress from "@material-ui/core/LinearProgress";

const STEP = [
  { title: "예약", desc: "스트림을 생성하시겠습니까? " },
  { title: "준비", desc: "방송을 시작하시겠습니까?" },
  { title: "상영", desc: "방송을 종료하시겠습니까?" },
  { title: "종료", desc: "배포하세겠습니까?" },
  { title: "배포", desc: "현재 배포중입니다." }
];

const STATUS = ["RESERVED", "READY", "LIVE", "COMPLETED", "PUBLISHED"];

const LiveController = props => {
  const [test,setTest]=React.useState(false);
  const [streaming] = useMutation(STREAMING);
  const streamingBinder = (schedule_id, youtube_id, status) =>
    streaming({
      variables: {
        schedule_id: schedule_id,
        youtube_id: youtube_id,
        status: status
      }
    });

  const [createVideo] = useMutation(CREATE_VIDEO);
  const createVideoBinder = schedule_id =>
    createVideo({
      variables: {
        schedule_id: schedule_id
      }
    });

  const { data, error, loading, refetch } = useQuery(VIDEO, {
    variables: { schedule_id: props.id }
  });

  if (loading) return <LinearProgress variant="query" />;
  if (error) return "error";

  const HANDLER = [
    async () => {
      const result = await createVideoBinder(props.id);
      console.log("createVideoBinder::", result);
      await refetch();
    },
    async () => {
      const result = await streamingBinder(
        props.id,
        data.video.youtubeId,
        "LIVE"
      );
      if (result) await refetch();
    },
    async () => {
      const result = await streamingBinder(
        props.id,
        data.video.youtubeId,
        "COMPLETED"
      );
      if (result) await refetch();
    },
    async () => {
      const result = await streamingBinder(
        props.id,
        data.video.youtubeId,
        "PUBLISHED"
      );
      if (result) await refetch();
    },
    async () => {
      const result = await streamingBinder(
        props.id,
        data.video.youtubeId,
        "UNPUBLISHED"
      );
      if (result) await refetch();
    },
    async () => {
      const result = await streamingBinder(
        props.id,
        data.video.youtubeId,
        "TEST"
      );
      if (result) await setTest(true);
    }
  ];

  const status = data.video ? data.video.schedule.status : "RESERVED";
  return (
    <Layout>
      <Stepper steps={STEP} state={STATUS.indexOf(status)} />
      <Desc steps={STEP} state={STATUS.indexOf(status)} />
      <Button steps={STEP} test={test} status={STATUS.indexOf(status)} handler={HANDLER} />
    </Layout>
  );
};

LiveController.propTypes = {};

export default LiveController;
