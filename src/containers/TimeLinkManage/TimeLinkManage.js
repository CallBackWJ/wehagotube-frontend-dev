import React from "react";
import PropTypes from "prop-types";
import Layout from "../../components/timeLink/ManageLayout";
import Form from "../../components/timeLink/Form";
import Item from "../../components/timeLink/Item";
import { useQuery, useMutation } from "react-apollo-hooks";
import LinearProgress from "@material-ui/core/LinearProgress";
import { VIDEO } from "../../graphql/video";
import { useVideoContext } from "../../contexts/VideoContext";

import { DELETE_TIMELINK, CREATE_TIMELINK } from "../../graphql/timeLink";
const TimeLinkManage = props => {
  const [deleteTimeLink] = useMutation(DELETE_TIMELINK);
  const deleteTimeLinkeBinder = id =>
    deleteTimeLink({
      variables: {
        id: id
      }
    });

  const [createTimeLink] = useMutation(CREATE_TIMELINK);
  const createTimeLinkeBinder = (videoId, seek, desc) =>
    createTimeLink({
      variables: {
        videoId: videoId,
        seek: seek,
        desc: desc
      }
    });

  const { seek, youtube } = useVideoContext();
  const { data, error, loading, refetch } = useQuery(VIDEO, {
    variables: { schedule_id: props.id }
  });
  if (loading) return <LinearProgress variant="query" />;
  if (error) return "error";
  const handleSeek = seek => {
    youtube.seekTo(seek);
  };
  const handleCreate = async desc => {
    await createTimeLinkeBinder(data.video.id, parseInt(seek), desc);
    await refetch();
  };

  const handleDelete = async id => {
    await deleteTimeLinkeBinder(id);
    await refetch();
  };

  let items;
  let disabled = true;
  if (data.video !== null) {
    const sortdata = data.video.timeLinks.sort((a, b) =>
      a.seek < b.seek ? -1 : a.seek > b.seek ? 1 : 0
    );

    items = sortdata.map(item => (
      <Item
        key={item.id}
        id={item.id}
        seek={item.seek}
        desc={item.desc}
        seekTo={handleSeek}
        onClick={handleDelete}
      />
    ));

    disabled = false;
  }

  return (
    <Layout>
      {items}
      <Form seek={seek} onClick={handleCreate} disabled={disabled} />
    </Layout>
  );
};

TimeLinkManage.propTypes = {};

export default TimeLinkManage;
