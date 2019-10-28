import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import IconButton from "@material-ui/core/IconButton";
import { MdClose } from "react-icons/md";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import DialogContentText from "@material-ui/core/DialogContentText";
import Slider from "@material-ui/core/Slider";
import styled from "styled-components";
import useInput from "../../../../hooks/useInput";
import moment from "moment"
const styles = theme => ({
  root: {
    margin: 0,
    padding: theme.spacing(2)
  },
  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500]
  }
});

const DialogTitle = withStyles(styles)(props => {
  const { children, classes, onClose } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={onClose}
        >
          <MdClose />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles(theme => ({
  root: {
    padding: theme.spacing(2)
  }
}))(MuiDialogContent);

const DialogActions = withStyles(theme => ({
  root: {
    margin: 0,
    padding: theme.spacing(1)
  }
}))(MuiDialogActions);

export default function CustomizedDialogs(props) {
  const title = useInput("");
  const desc = useInput("");
  const date = useInput("");
  const time = useInput("");
  const [hour, setHour] = React.useState("");
  const [updatable, setUpdatable] = React.useState(true);

  React.useEffect(() => {
    title.setValue(props.data.title);
    desc.setValue(props.data.desc);
    date.setValue(moment(props.data.start).format("YYYY-MM-DD"));
    time.setValue(moment(props.data.start).format("HH:mm"));
    setHour(
      (new Date(props.data.end).getTime() -
        new Date(props.data.start).getTime()) /
        60000
    );
    setUpdatable(true)
  }, [props.data]);



  const handleOnUpdate = () => {
    setUpdatable(false);
  };
  const handleOffUpdate = () => {
    const start=date.value+"T"+time.value+":00+09:00"
    const end=moment(start).add(hour,"minutes").format("YYYY-MM-DDTHH:mm:00+09:00")
    props.onUpdate(props.data.id,title.value,desc.value,start,end,props.data.status);
    setUpdatable(true);
  };

  const handleDelete=async()=>{
    const val= await props.onDelete(props.data.id);
    if(val){
      props.onClose()
    }else{
      alert("삭제 실패")
    }

    
  }
  const valuetext = value => {
    console.log(value);
    setHour(value);
  };
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

  return (
    <Dialog
      onClose={props.onClose}
      aria-labelledby="customized-dialog-title"
      open={props.open}
      maxWidth="xs"
    >
      <DialogTitle id="customized-dialog-title" onClose={props.onClose}>
        {props.data.status}
      </DialogTitle>
      <DialogContent dividers>
        <DialogContent>
          <DialogContentText>
          일정을 수정 또는 삭제하실 수 있습니다. 
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="제목"
            value={title.value}
            onChange={title.onChange}
            variant="outlined"
            fullWidth
            disabled={updatable}
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
            disabled={updatable}
          />
          <TextField
            id="date"
            label="날짜"
            type="date"
            value={date.value}
            onChange={date.onChange}
            disabled={updatable}
            InputLabelProps={{
              shrink: true
            }}
            inputProps={{
              step: 300
            }}
          />
          <TextField
            id="time"
            label="시간"
            type="time"
            value={time.value}
            onChange={time.onChange}
            disabled={updatable}
            InputLabelProps={{
              shrink: true
            }}
            inputProps={{
              step: 300 // 5 min
            }}
          />
          <Slider
            disabled={updatable}
            defaultValue={hour}
            getAriaValueText={valuetext}
            aria-labelledby="discrete-slider"
            valueLabelDisplay="auto"
            step={30}
            marks={marks}
            min={0}
            max={300}
          />
        </DialogContent>
      </DialogContent>
      <DialogActions>
        {updatable ? (
          <Button onClick={handleOnUpdate} color="primary">
            수정
          </Button>
        ) : (
          <Button onClick={handleOffUpdate} color="primary">
            확인
          </Button>
        )}

        <Button onClick={handleDelete} color="primary" disabled={!updatable}>
          삭제
        </Button>
      </DialogActions>
    </Dialog>
  );
}
