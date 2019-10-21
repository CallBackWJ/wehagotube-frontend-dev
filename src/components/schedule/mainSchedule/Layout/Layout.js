import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import IconButton from "@material-ui/core/IconButton";
import { MdKeyboardArrowLeft,MdKeyboardArrowRight} from "react-icons/md";
const Root = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;
const List = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom:-3rem;
`;
const Controller = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;
const Next = styled.div`
  position: relative;
  left: 4rem;
  top: -3rem;
`;
const Prev = styled.div`
  position: relative;
  left: -63rem;
  top: -3rem;
`;
const Layout = props => {
  return (
    <Root>
      <List>{props.children}</List>
      <Controller>
        <Prev>
          <IconButton onClick={props.prev} disabled={props.page===0}>
            <MdKeyboardArrowLeft />
          </IconButton>
        </Prev>
        {/* {props.page} */}
        <Next>
          <IconButton onClick={props.next} disabled={!props.isMoreable} >
            <MdKeyboardArrowRight />
          </IconButton>
        </Next>
      </Controller>
    </Root>
  );
};

Layout.propTypes = {};

export default Layout;
