import React from 'react';
import PropTypes from 'prop-types';
import Layout from '../../components/schedule/mainSchedule/Layout'
import Item from '../../components/schedule/mainSchedule/Item'
import { useQuery } from "react-apollo-hooks";
import { LATEST_SCHEDULE_LIST } from "../../graphql/schedule";
const MainSchedule = props => {
    const { data, error, loading } = useQuery(LATEST_SCHEDULE_LIST);
    if (loading) return "loading";
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
            title=""
            description=""
            scheduledStartTime=""
            scheduledEndTime=""
          />
        );
      }
    return (
        <Layout>
            {items}
        </Layout>
    );
};

MainSchedule.propTypes = {
    
};

export default MainSchedule;