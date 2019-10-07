import React from "react";
import PropTypes from "prop-types";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import styled from "styled-components";

const Root = styled.div`
 width:100%;
 height:100%;
 padding:1rem;

`;
const localizer = momentLocalizer(moment);
const formats = {
  monthHeaderFormat: "YYYY년 MM월",
  dayHeaderFormat: "MM월 DD일"
};

const ScheduleCalendar = props => {

  
  const Event = ({ event }) => (
    <span style={{}}>
      <strong>{event.title}</strong>
      {event.desc && ":  " + event.desc}
    </span>
  );

  const EventAgenda = ({ event }) => (
    <span>
      <em style={{ fontWeight: "550" }}>{event.title}</em>
      <p>{event.desc}</p>
    </span>
  );
  const customDayPropGetter = date => {
    if (date.getDay() === 0 || date.getDay() === 6)
      return {
        style: {
          background: "" + (date.getDay() === 0 ? "#f6a2" : "#6af2")
        }
      };
    else return {};
  };

  return (
    <Root>
      <Calendar 
        popup={true}
        popupOffset={{x: 30, y: 20}}
        onDoubleClickEvent={event => alert("더블클릭")}
        formats={formats}
        selectable
        views={["month", "work_week", "day", "agenda"]}
        events={props.items}
        startAccessor="start"
        endAccessor="end"
        scrollToTime={new Date(2019, 1, 1, 6)}
        defaultDate={moment().toDate()}
        localizer={localizer}
        onSelectEvent={event => alert(event.title)}
        onSelectSlot={props.handleSelectSlot}
        dayPropGetter={customDayPropGetter}
        components={{
          //event: Event,
          agenda: {
            event: EventAgenda
          }
        }}
      />
    </Root>
  );
};

ScheduleCalendar.propTypes = {};

export default ScheduleCalendar;
