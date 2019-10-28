import React from "react";
import PropTypes from "prop-types";
import ScheduleCalendar from "../../components/schedule/ScheduleCalendar";
import { useMutation, useQuery } from "react-apollo-hooks";
import {
  CREATE_SCHEDULE,
  SCHEDULES,
  UPDATE_SCHEDULE,
  DELETE_SCHEDULE
} from "../../graphql/schedule";
import CreateDialog from "../../components/schedule/CreateDialog";
import UpdateDialog from "../../components/common/dialog/Schedule";
import moment from "moment";
import Loading from "../../components/common/Loading";
const Calendar = props => {
  const [createOpen, setCreateOpen] = React.useState(false);
  const [updateOpen, setUpdateOpen] = React.useState(false);
  const [scheduleData, setScheduleData] = React.useState({});
  const [createData, setCreateData] = React.useState({});
  const [APILoading, setAPILoading] = React.useState(false);

  const handleUpdateOpen = async e => {
    await setScheduleData(e);
    setUpdateOpen(true);
  };
  const handleUpdateClose = () => {
    setUpdateOpen(false);
  };

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

  const [updateSchedule] = useMutation(UPDATE_SCHEDULE);
  const updateScheduleBinder = (id, title, desc, startTime, endTime, status) =>
    updateSchedule({
      variables: {
        id: id,
        title: title,
        desc: desc,
        startTime: startTime,
        endTime: endTime,
        status: status
      }
    });

  const [deleteSchedule] = useMutation(DELETE_SCHEDULE);
  const deleteScheduleBinder = id =>
    deleteSchedule({
      variables: {
        id: id
      }
    });

  const { data, error, loading, refetch } = useQuery(SCHEDULES, {
    variables: {
      type: props.type,
      keyword: props.keyword === "NONE" ? "" : props.keyword
    }
  });

  if (loading) return <Loading />;
  if (error) return "error";

  const items = data.schedules.map(item => ({
    id: item.id,
    title: item.title,
    desc: item.desc,
    status: item.status,
    start: new Date(item.startTime),
    end: new Date(item.endTime)
  }));

  const isWeekend = date => date.getDay() === 0 || date.getDay() === 6;
  const diffDate = (start, end) =>
    new Date(end).getDate() - new Date(start).getDate();

  const handleSave = async (title, desc, start, end) => {
    setAPILoading(true);
    setCreateOpen(false);
    for (let i = 0, weekendCount = 0; i <= diffDate(start, end); i++) {
      isWeekend(
        moment(start)
          .add(i, "day")
          .toDate()
      )
        ? weekendCount++
        : await createScheduleBinder(
            diffDate(start, end)
              ? title + "[" + (i + 1 - weekendCount) + "]"
              : title,
            desc,
            moment(start)
              .add(i, "day")
              .format("YYYY[-]MM[-]DDTHH:mm:00+09:00"),
            moment(end)
              .add(i - diffDate(start, end), "day")
              .format("YYYY[-]MM[-]DDTHH:mm:00+09:00")
          );
    }
    refetch();
    setAPILoading(false);
  };

  const handleDelete = async id => {
    setAPILoading(true);
    const val = await deleteScheduleBinder(id);
    await refetch();
    setAPILoading(false);
    return val.data.deleteSchedule;
  };

  const handleUpdate = async (id, title, desc, startTime, endTime, status) => {
    setAPILoading(true);
    await updateScheduleBinder(id, title, desc, startTime, endTime, status);
    await refetch();
    setAPILoading(false);
  };

  const setTime = ({ start, end }) => {
    setCreateData({ start, end });
    setCreateOpen(true);
  };

  const handleSelectSlot = event =>
    isWeekend(new Date(event.start)) || isWeekend(new Date(event.end))
      ? alert("주말에는 스케줄을 생성할수 없습니다.")
      : diffDate(new Date(), new Date(event.start)) < 0
      ? alert("이전 날짜에 스케줄을 설정 할 수 없습니다.")
      : setTime(event);

  return (
    <>
      {APILoading ? (
        <Loading />
      ) : (
        <>
          <CreateDialog
            open={createOpen}
            onClose={() => setCreateOpen(false)}
            onCreate={handleSave}
            data={createData}
          />
          <UpdateDialog
            open={updateOpen}
            onClose={handleUpdateClose}
            onUpdate={handleUpdate}
            onDelete={handleDelete}
            data={scheduleData}
          />
          <ScheduleCalendar
            items={items}
            onSelectSlot={handleSelectSlot}
            onSelectEvent={handleUpdateOpen}
          />
        </>
      )}
    </>
  );
};

Calendar.propTypes = {};

export default Calendar;
