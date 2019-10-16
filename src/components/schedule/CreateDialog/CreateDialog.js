import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import styled from "styled-components";
import Slider from "@material-ui/core/Slider";
import moment from "moment";
import useInput from "../../../hooks/useInput";

const DateRange = styled.div``;
const marks = [
  {
    value: 0,
    label: "0시간"
  },
  {
    value: 60,
    label: "1시간"
  },
  {
    value: 120,
    label: "2시간"
  },
  {
    value: 180,
    label: "3시간"
  },
  {
    value: 240,
    label: "4시간"
  },
  {
    value: 300,
    label: "5시간"
  }
];

const CreateDialog = props => {
  const title = useInput("");
  const desc = useInput("");
  const start = useInput("");
  const end = useInput("");

  const handleTimeChange = e => {
    start.setValue(
      moment(start.value).format("YYYY-MM-DDT") + e.target.value + ":00+09:00"
    );
  };
  const valuetext = value => {
    end.setValue( moment(start.value).add(value, "minutes").add(new Date(props.data.end).getDate() -new Date(props.data.start).getDate(),"day").format());
  };

  const handleCreate = () => {
    props.onCreate(title.value, desc.value, start.value, end.value);
  };

  const diffMinutes = (start, end) => {
    const hour = new Date(end).getHours() - new Date(start).getHours();
    const minutes = new Date(end).getMinutes() - new Date(start).getMinutes();
    return hour * 60 + minutes;
  };

  React.useEffect(() => {
    desc.setValue("");
    title.setValue("");
    start.setValue(moment(props.data.start).format());
    end.setValue(moment(props.data.end).format());
  }, [props.data]);

  return (
    <Dialog
      open={props.open}
      onClose={props.onClose}
      aria-labelledby="form-dialog-title"
      fullWidth={true}
      maxWidth="xs"
    >
      <DialogTitle id="form-dialog-title">스케줄 등록</DialogTitle>
      <DialogContent>
        <DialogContentText>선택된 날짜에 방송이 예약됩니다.</DialogContentText>
        <TextField
          autoFocus
          margin="dense"
          id="name"
          label="제목"
          value={title.value}
          onChange={title.onChange}
          variant="outlined"
          fullWidth
        />
        <TextField
          id="outlined-multiline-static"
          label="상세내용"
          multiline
          rows="4"
          value={desc.value}
          onChange={desc.onChange}
          margin="normal"
          fullWidth
          variant="outlined"
        />
        <DateRange>
          {moment(props.data.start).format("YYYY-MM-DD") +
            " ~ " +
            moment(props.data.end).format("YYYY-MM-DD")}
        </DateRange>
        <TextField
          id="time"
          label="시간"
          type="time"
          value={moment(start.value).format("HH:mm")}
          onChange={handleTimeChange}
          InputLabelProps={{
            shrink: true
          }}
          inputProps={{
            step: 300
          }}
        />
        <Slider
          defaultValue={diffMinutes(props.data.start, props.data.end)}
          getAriaValueText={valuetext}
          aria-labelledby="discrete-slider"
          valueLabelDisplay="auto"
          step={30}
          marks={marks}
          min={0}
          max={300}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={props.onClose} color="primary">
          취소
        </Button>
        <Button onClick={handleCreate} color="primary">
          등록
        </Button>
      </DialogActions>
    </Dialog>
  );
};
export default CreateDialog;
