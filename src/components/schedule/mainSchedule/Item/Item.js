import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Root = styled.div`
  width: 12rem;
  height: 10rem;
  box-shadow: 0 2px 3px rgba(0, 10, 18, 0.2);
  background: rgb(238, 238, 238);

  .front {
    display: flex;
  }
  .back {
    display: none;
    background: #444444;
    color: white;
 
  }
  &:hover {
    .front {
      display: none;
    }
    .back {
      display: flex;
      justify-content: center;
      font-size:0.8rem;
      align-items: center;
      padding:1.5rem;
      overflow:auto;
    }
  }
`;
const Card = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  border-radius:3px;
`;

const ScheduleDate = styled.div`
  flex: 0.25;
  height: 2rem;
  background: rgb(211, 210, 211);
  border-top-left-radius:2px;
  border-top-right-radius:2px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Descript = styled.div`
  flex: 0.75;
  height: 8rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;
`;
const MainTitle = styled.div``;
const SubTitle = styled.div`
font-size:0.8rem;
text-align : center
color: gray;

display: -webkit-box; 
display: -ms-flexbox; 
display: box;
 margin-top:1px; 
 max-height:5rem;
 overflow:hidden; vertical-align:top; 
 text-overflow: ellipsis; word-break:break-all;
 -webkit-box-orient:vertical;
 -webkit-line-clamp:2

`;
const ScheduleTime = styled.div`
  margin-top: auto;
  color: rgb(47, 133, 246);
`;

const dateFormat = UTC => {
  const schedule = new Date(UTC);
  const days = "일월화수목금토";
  const year = schedule.getFullYear();
  const month = Number(schedule.getMonth()) + 1;
  const date = schedule.getDate();
  const day = days[schedule.getDay()];
  const hours =
    Number(schedule.getHours()) >= 12
      ? "PM " + (Number(schedule.getHours()) - 12)
      : "AM " + schedule.getHours();
  const minutes =
    schedule.getMinutes() > 9
      ? schedule.getMinutes()
      : "0" + schedule.getMinutes();

  return {
    printDate: () => year + "." + month + "." + date + " (" + day + ")",
    printTime: () => hours + ":" + minutes
  };
};

const Item = props => {
  if (!props.videoId)
    return (
      <Root>
        <Card>
          <ScheduleDate>{props.title}</ScheduleDate>
          <Descript>
            <MainTitle />
            <SubTitle />
            <ScheduleTime />
          </Descript>
        </Card>
      </Root>
    );
  const start = dateFormat(props.scheduledStartTime);
  const end = dateFormat(props.scheduledEndTime);

  return (
    <Root>
      <Card className="front">
        <ScheduleDate>{start.printDate()}</ScheduleDate>
        <Descript>
          <MainTitle>{props.title}</MainTitle>
          <SubTitle>{props.description}</SubTitle>
          <ScheduleTime>
            {start.printTime() + " ~ " + end.printTime()}
          </ScheduleTime>
        </Descript>
      </Card>
      <Card className="back">{props.description}</Card>
    </Root>
  );
};

Item.propTypes = {};

export default Item;
