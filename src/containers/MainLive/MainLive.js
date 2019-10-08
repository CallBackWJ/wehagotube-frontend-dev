import React from 'react';
import PropTypes from 'prop-types';
import Live from '../../components/video/MainLive'
import Youtube from '../../components/video/Youtube'
import Info from '../../containers/VideoInfo'
import { LIVE_VIDEO } from "../../graphql/video";
import { useQuery } from "react-apollo-hooks";

const MainLive = props => {


    const { data, error, loading } = useQuery(LIVE_VIDEO);
    if (loading) return "";
    if (error) return "error";

    const items = data.liveVideo.map(item => item.schedule.id);


    if(items[0]){
        return (
            <Live id={items[0]}>
               <Youtube id={items[0]} width="240" height="135" />
               <Info id={items[0]}/> 
            </Live>
        );
    }else{
        return null;
    }
 
};

MainLive.propTypes = {
    
};

export default MainLive;