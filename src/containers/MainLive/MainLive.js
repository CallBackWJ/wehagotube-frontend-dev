import React from "react";
import PropTypes from "prop-types";
import Live from "../../components/video/MainLive";
import Youtube from "../../components/video/Youtube";
import Info from "../../containers/VideoInfo";
import { LIVE_VIDEO } from "../../graphql/video";
import { PUBSUB_SCHEDULE } from "../../graphql/schedule";
//import { useQuery, useSubscription } from "react-apollo-hooks";
import { useQuery } from "react-apollo";

const MainLive = props => {
  //   const { data, error, loading } = useSubscription(PUBSUB_SCHEDULE);
  //   if (loading) return ""
  //   if (error) return "error"
  //   const id=data.pubsubSchedule&&data.pubsubSchedule.id;
  //   if(id){
  //       return (
  //           <Live id={id}>
  //              <Youtube id={id} width="240" height="135" />
  //              <Info id={id}/>
  //           </Live>
  //       );
  //   }else{
  //       return null;
  //   }

  const { data, error, loading, subscribeToMore } = useQuery(LIVE_VIDEO);
  if (loading) return "";
  if (error) return "error";

  const subscribeToNewComments = () =>
    subscribeToMore({
      document: PUBSUB_SCHEDULE,
      updateQuery: (prev, { subscriptionData }) => {
        console.log("subscriptionData.data::", subscriptionData.data);
        console.log("prev::", prev);
        if (!subscriptionData.data.pubsubSchedule) {
          console.log("if111::", subscriptionData.data.pubsubSchedule);
          return {
            liveVideo: []
          };
        }
        console.log("id::", subscriptionData.data.pubsubSchedule.id);
        console.log("status::", subscriptionData.data.pubsubSchedule.status);
        
        return {
          liveVideo: [
            {
              schedule: {
                id: subscriptionData.data.pubsubSchedule.id,
                status:subscriptionData.data.pubsubSchedule.status,
                __typename: "Schedule"
              },
              __typename: "Video"
            }
          ]
        };


      }
    });
  subscribeToNewComments();

  console.log("data::",data)
  const items = data.liveVideo.map(item => item.schedule.id);

  if (items[0]) {
    return (
      <Live id={items[0]}>
        <Youtube id={items[0]} width="240" height="135" />
        <Info id={items[0]} />
      </Live>
    );
  } else {
    return null;
  }
};

MainLive.propTypes = {};

export default MainLive;
