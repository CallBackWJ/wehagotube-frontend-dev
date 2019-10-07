import React from 'react';
import PropTypes from 'prop-types';
import ScheduleCalendar from "../../components/schedule/ScheduleCalendar"
import useInput from '../../hooks/useInput'
import { useMutation, useQuery } from "react-apollo-hooks";
import LinearProgress from "@material-ui/core/LinearProgress";
import { CREATE_SCHEDULE,SCHEDULES } from "../../graphql/schedule";
import CreateDialog from "../../components/schedule/CreateDialog"
import moment from "moment";
const Calendar = props => {
    const [open, setOpen] = React.useState(false);

    const [startDate, setStartDate] = React.useState();
    const [endDate, setEndDate] = React.useState();
    const startTime = useInput("00:00");
    const endTime = useInput("00:00");
    const title = useInput("");
    const desc = useInput("");
  
    const [createSchedule] = useMutation(CREATE_SCHEDULE);
    const createScheduleBinder = (title, desc, startTime, endTime) =>
      createSchedule({
        variables: {
          title: title,
          desc: desc,
          startTime: startTime,
          endTime: endTime
        }
      });
  
    const { data, error, loading, refetch } = useQuery(SCHEDULES, {
      variables: { type: props.type, keyword: props.keyword==="NONE"?"":props.keyword }
    });
    if (loading) return <LinearProgress variant="query" />;
    if (error) return "error";
    const items = data.schedules.map(item => ({
      id: item.id,
      title: item.title,
      desc: item.desc,
      start: moment(item.startTime).toDate(),
      end: moment(item.endTime).toDate()
    }));
  


    const isWeekend = date => date.getDay() === 0 || date.getDay() === 6;

    const handleSave = async () => {
      setOpen(false);
      const dayRange =new Date(endDate).getDate() - new Date(startDate).getDate();

      for (let i = 0, weekendCount = 0; i <= dayRange; i++) {
        isWeekend(moment(startDate).add(i, "day").toDate())?weekendCount++:
        await createScheduleBinder(
          dayRange === 0? title.value:title.value + "[" + (i + 1 - weekendCount) + "]",
          desc.value,
          moment(startDate).add(i, "day").format("YYYY[-]MM[-]DD") +"T" +startTime.value +":00+09:00",
          moment(startDate).add(i, "day").format("YYYY[-]MM[-]DD") +"T" +endTime.value +":00+09:00"
        );
      }
      
      refetch();
    };
  
  const setTime = ({ start, end }) => {
    startTime.setValue(moment(start).format("hh:mm"));
    endTime.setValue(moment(end).format("hh:mm"));
    setStartDate(moment(start).format("YYYY[-]MM[-]DD"));
    setEndDate(moment(end).format("YYYY[-]MM[-]DD"));
    setOpen(true);
  };

  const handleSelectSlot = event =>
    isWeekend(new Date(event.start)) || isWeekend(new Date(event.end))
      ? alert("주말에는 스케줄을 생성할수 없습니다.")
      : setTime(event);


    return (
        <>
         <CreateDialog
        open={open}
        handleClose={()=>setOpen(false)}
        handleSave={handleSave}
        title={title}
        desc={desc}
        startTime={startTime}
        startDate={startDate}
        endTime={endTime}
        endDate={endDate}
      />
        <ScheduleCalendar items={items} handleSelectSlot={handleSelectSlot} />
        </>
    );
};

Calendar.propTypes = {
    
};

export default Calendar;