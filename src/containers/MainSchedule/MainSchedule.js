import React from "react";
import PropTypes from "prop-types";
import Layout from "../../components/schedule/mainSchedule/Layout";
import Item from "../../components/schedule/mainSchedule/Item";
import { useQuery } from "react-apollo-hooks";
import { LATEST_SCHEDULE_LIST } from "../../graphql/schedule";
const MainSchedule = props => {

  const [page,setPage]=React.useState(0);
 

  const { data, error, loading } = useQuery(LATEST_SCHEDULE_LIST, {
    variables: {
       page
    }
  });
  let empty = [];
  for (let i = 0; i < 5; i++) {
    empty.push(
      <Item
        key={i}
        videoId=""
        title=""
        description=""
        scheduledStartTime=""
        scheduledEndTime=""
      />
    );
  }

  if (loading) return <Layout>{empty}</Layout>;
  if (error) return "error";
  const items = data.latestScheduleList.map(item => (
    <Item
      key={item.id}
      videoId={item.id}
      title={item.title}
      description={item.desc}
      scheduledStartTime={item.startTime}
      scheduledEndTime={item.endTime}
    />
  ));


  while (items.length < 5) {
    items.push(
      <Item
        key={items.length}
        videoId=""
        title="일정 없음"
        description=""
        scheduledStartTime=""
        scheduledEndTime=""
      />
    );
  }
  const handlePrev=()=>{
    if(page){
      setPage(page-1);
    }
  }
  const handleNext=()=>{
    if(data.latestScheduleList.length===5){
      setPage(page+1);
    }
  }
  
  return <Layout prev={handlePrev} next={handleNext} page={page} >{items}</Layout>;
};

MainSchedule.propTypes = {};

export default MainSchedule;
