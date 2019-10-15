import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import styled from "styled-components";
const DateRange = styled.div``;

const CreateDialog = props => {
  


  return (
    <Dialog
      open={props.open}
      onClose={props.handleClose}
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
          value={props.title.value}
       
          onChange={props.title.onChange}
          variant="outlined"
          fullWidth
        />
        <TextField
          id="outlined-multiline-static"
          label="상세내용"
          multiline
          rows="4"
          value={props.desc.value}
          onChange={props.desc.onChange}
          margin="normal"
          fullWidth
          variant="outlined"
        />
        <DateRange>{props.startDate + " ~ " + props.endDate}</DateRange>
        <TextField
          id="time"
          label="시간"
          type="time"
          value={props.startTime.value}
          onChange={props.startTime.onChange}
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
          value={props.endTime.value}
          onChange={props.endTime.onChange}
          InputLabelProps={{
            shrink: true
          }}
          inputProps={{
            step: 300 // 5 min
          }}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={props.handleClose} color="primary">
          취소
        </Button>
        <Button onClick={props.handleSave} color="primary">
          등록
        </Button>
      </DialogActions>
    </Dialog>
  );
};
export default CreateDialog;
