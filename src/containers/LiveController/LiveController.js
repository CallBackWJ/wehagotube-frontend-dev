import React from "react";
import PropTypes from "prop-types";
import Layout from "../../components/video/liveController/Layout";
import Stepper from "../../components/video/liveController/Stepper";
import Desc from "../../components/video/liveController/Desc";
import Button from "../../components/video/liveController/Button";
import {
  CREATE_VIDEO,
  VIDEO,
  STREAMING,
  DO_PUBLISH,
  DELETE_VIDEO
} from "../../graphql/video";
import { useQuery, useMutation } from "react-apollo-hooks";
import LinearProgress from "@material-ui/core/LinearProgress";
import Loading from "../../components/common/Loading";
const STEP = [
  { title: "예약", desc: "스트림을 생성하시겠습니까? " },
  { title: "준비", desc: "방송을 시작하시겠습니까?" },
  { title: "상영", desc: "방송을 종료하시겠습니까?" },
  { title: "종료", desc: "배포하세겠습니까?" },
  { title: "배포", desc: "현재 배포중입니다." }
];

const STATUS = ["RESERVED", "READY", "LIVE", "COMPLETED", "PUBLISHED"];

const LiveController = props => {
  const [UILoading, setUILoading] = React.useState(false);

  const [streaming] = useMutation(STREAMING);
  const streamingBinder = (schedule_id, youtube_id, status) =>
    streaming({
      variables: {
        schedule_id: schedule_id,
        youtube_id: youtube_id,
        status: status
      }
    });

    const [deleteVideo] = useMutation(DELETE_VIDEO);
    const deleteVideoBinder = (schedule_id, youtube_id) =>
    deleteVideo({
        variables: {
          schedule_id: schedule_id,
          youtube_id: youtube_id
        }
      });

  const [doPublish] = useMutation(DO_PUBLISH);
  const doPublishBinder = (id, publish) =>
    doPublish({
      variables: {
        id,
        publish
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
      setUILoading(true);
      const {data:{createVideo}} = await createVideoBinder(props.id);
      createVideo?await refetch():alert("라이브 생성에 실패했습니다.");
      setUILoading(false);
    },
    async () => {
      setUILoading(true);
      const {data:{streaming}} = await streamingBinder(
        props.id,
        data.video.youtubeId,
        "LIVE"
      );
      streaming?await refetch():alert("스트림이 존재하지 않습니다.");
      setUILoading(false);
    },
    async () => {
      setUILoading(true);
      const {data:{streaming}}  = await streamingBinder(
        props.id,
        data.video.youtubeId,
        "COMPLETED"
      );
      streaming?await refetch():alert("스트림을 종료 할 수 없습니다.");
      setUILoading(false);
    },
    async () => {
      setUILoading(true);
      const {data:{doPublish}} = await doPublishBinder(
        props.id,
        true
      );
      doPublish?await refetch():alert("공개 불가능");
      setUILoading(false);
    },
    async () => {
      setUILoading(true);
      const {data:{doPublish}}= await doPublishBinder(
        props.id,
        false
      );
      doPublish?await refetch():alert("비공개 불가능");
      setUILoading(false);
    },
    async () => {
      setUILoading(true);
      const {data:{deleteVideo}} = await deleteVideoBinder(
        props.id,
        data.video.youtubeId,
      );
      deleteVideo?await refetch():alert("삭제 실패");
      setUILoading(false);
    }
  ];

  const status = data.video ? data.video.schedule.status : "RESERVED";
  if (UILoading) return <Loading />;
  return (
    <Layout>
      <Stepper steps={STEP} state={STATUS.indexOf(status)} />
      <Desc steps={STEP} state={STATUS.indexOf(status)} />
      <Button
        steps={STEP}
        status={STATUS.indexOf(status)}
        handler={HANDLER}
      />
    </Layout>
  );
};

LiveController.propTypes = {};

export default LiveController;
