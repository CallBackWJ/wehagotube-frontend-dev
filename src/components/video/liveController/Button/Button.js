import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Root = styled.div`
  display: flex;
`;
const Next = styled.button`
  width: 4rem;
  height: 1.5rem;
  background: rgb(30, 120, 180);
  color: white;
  font-weight: 700;
  border-radius: 0.5rem;
  margin: 1rem 3rem 0 0;
  :disabled {
    opacity: 0.4;
  }
`;

const Back = styled.button`
  width: 4rem;
  height: 1.5rem;
  background: rgb(30, 120, 180);
  color: white;
  font-weight: 700;
  border-radius: 0.5rem;
  margin: 1rem 1rem 0 0;
  :disabled {
    opacity: 0.4;
  }
`;
const Button = props => {
  return (
    <Root>
      {props.steps.length === props.status + 1 ? (
        <Back onClick={props.handler[props.status]}>배포중지</Back>
      ) : props.status === 1 ? (
        <Back onClick={props.handler[5]} disabled={props.test}>
          테스트
        </Back>
      ) : props.status === 3 ? (
        <Back onClick={props.handler[6]}>
          삭제
        </Back>
      ) : null}
      <Next
        disabled={
          props.steps.length === props.status + 1 ||
          (props.status === 1 && props.test === false)
        }
        onClick={props.handler[props.status]}
      >
        {props.steps.length === props.status + 1
          ? "완료"
          : props.steps[props.status + 1].title}
      </Next>
    </Root>
  );
};

Button.propTypes = {};

export default Button;
