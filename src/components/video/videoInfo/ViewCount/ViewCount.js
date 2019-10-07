import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components'

const Root =styled.div`
color: gray;
margin-top: auto;
`
const ViewCount = props => {
    const STATUS={
        "RESERVED":()=>"아직 상영되지 않은 방송입니다.",
        "READY":(v)=>`방송 대기인원 :${v}`,
        "LIVE":(v)=>`${v}명 시청중`,
        "COMPLETED":()=>"방송이 종료되었습니다.",
        "PUBLISHED":(v)=>`조회수: ${v}`
      }
    return (
        <Root>
                 {STATUS[props.status](props.count)}
        </Root>
    );
};

ViewCount.propTypes = {
    
};

export default ViewCount;