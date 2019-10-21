import React from "react";
import PropTypes from "prop-types";
import Layout from "../../components/video/mainVideo/Layout";
import Item from "../../components/video/mainVideo/Item";
import { PAST_VIDEO } from "../../graphql/video";
import { useQuery } from "react-apollo-hooks";
const dateformat = data => {
  const sec = 60;
  const mins = 60;
  const hours = 24;
  const days = 30;
  const month = 12;
  const tday = new Date();
  const cday = new Date(data);
  let difftime = Math.floor((tday - cday) / 1000);
  let msg = "";

  if (difftime < sec) {
    msg = "방금";
  } else if ((difftime /= sec) < mins) {
    msg = Math.floor(difftime) + "분";
  } else if ((difftime /= mins) < hours) {
    msg = Math.floor(difftime) + "시간";
  } else if ((difftime /= hours) < days) {
    msg = Math.floor(difftime) + "일";
  } else if ((difftime /= days) < month) {
    msg = Math.floor(difftime) + "달";
  } else {
    msg = Math.floor(difftime) + "년";
  }
  return msg;
};

const MainVideo = props => {
  const [page,setPage]=React.useState(0);
  const { data, error, loading} = useQuery(PAST_VIDEO,{
    variables: {
       page
    }
  });


  const HandlePage=(disabled)=>{
    disabled?setPage(0):setPage(page+1);
  }

  let empty = [];
  let i;
  for (i = 0; i < (page+1)*3; i++) {
    empty.push(<Item key={i} />);
  } 

  if (loading) return <Layout>{empty}</Layout>;
  if (error) return "error";

  const items = data.pastVideo.map(item => (
    <Item
      key={item.schedule.id}
      id={item.schedule.id}
      title={item.schedule.title}
      description={item.schedule.desc}
      viewCount={item.viewCount}
      thumbnail={item.thumbnail}
      publishedAt={dateformat(item.createdAt)}
    />
  ));
  
  return (
    <Layout onClick={HandlePage} disabled={i>items.length}>
      {items}
    </Layout>
  );
};

MainVideo.propTypes = {};

export default MainVideo;
