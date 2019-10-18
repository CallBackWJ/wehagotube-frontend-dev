import React from 'react';
import PropTypes from 'prop-types';
import Layout from '../../components/common/layout/containers/LiveManage'
import Youtube from '../../components/video/Youtube'
import Controller from '../LiveController'
import Info from "../VideoInfo"
import TimeLink from '../TimeLinkManage'
import Box from '../../components/ChatAndLinkBox'
import LiveChat from '../../components/video/LiveChat'
const LiveManage = props => {
    return (
        <Layout>
           <Controller id={props.id}/>
           <Youtube id={props.id} width="534" height="300" />
           <Info id={props.id}/>
           <Box title={["실시간 채팅","타임 링크"]}>
            <LiveChat id={props.id}/>
            <TimeLink id={props.id}/>
           </Box>
        </Layout>
    );
};

LiveManage.propTypes = {
    
};

export default LiveManage;