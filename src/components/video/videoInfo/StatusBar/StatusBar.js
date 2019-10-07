import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components'

const Root =styled.div`
width: 10rem;
  height: 2rem;
  border-radius: 0.2rem;
  border: solid 1px
    ${props =>
      props.status === "READY"
        ? "rgb(65, 116, 251)"
        : props.status === "LIVE"
        ? "rgb(238, 90, 83)"
        : "rgb(76, 76, 76)"};
  background: white;
  display: flex;
  justify-content: center;
  color: ${props =>
    props.status === "READY"
      ? "rgb(65, 116, 251)"
      : props.status === "LIVE"
      ? "rgb(238, 90, 83)"
      : "rgb(76, 76, 76)"};
  align-items: center;
  padding: 0.5rem;
  padding-top: 0.7rem;
  font-size: 1rem;
`
const StatusBar = props => {
  const STATUS={
    "RESERVED":"예약된 방송",
    "READY":"방송 준비중",
    "LIVE":"실시간 스트리밍중",
    "COMPLETED":"방송 종료",
    "PUBLISHED":"다시보기"
  }
    return (
        <Root status={props.status}>
                 {STATUS[props.status]}
        </Root>
    );
};

StatusBar.propTypes = {
    
};

export default StatusBar;