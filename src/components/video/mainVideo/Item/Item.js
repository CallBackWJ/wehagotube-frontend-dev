import React from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";
import { withRouter } from "react-router-dom";
const Card = styled.div`
  width: 100%;
  height: 9rem;
  background: rgb(248, 249, 254);
  margin-bottom: 1rem;
  display: flex;
  padding: 1rem;
  border-radius:5px;
  border:1px solid #F0F0F0;
  box-shadow: 0 1px 2px rgba(0, 5, 9, 0.1);
  &:hover{
    border:1px solid rgb(0, 144, 245);
  }
  cursor:pointer;
`;

//동영상 이미지 부분
const Video = styled.div`
  flex: 2;
`;
const Image = styled.img`
  width: 12rem;
  height: 7rem;
  position: relative;
  background-size: cover;
`;
const Badge = styled.div`
  position: absolute;
  top: 200px;
  left: 0;
  width: 100%;
  margin: 0 auto;
  width: 300px;
  height: 50px;
`;

//설명 부분
const Descript = styled.div`
  flex: 8;
  display: flex;
  flex-direction: column;
`;
const MainTitle = styled.div`
  font-size: 1.2rem;
`;
const SubTitle = styled.div`
  color: gray;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  word-wrap: break-word;
  line-height: 1.3em;
  height: 3.6em;
`;
const LookupCounter = styled.div`
  color: rgb(170, 170, 170);
  margin-top: auto;
`;

const Item = props => {
  const handleClick = () => {

    props.history.push(`/watch/${props.id}`);
  };
  return (
    <Card onClick={handleClick}>
      <Video >
        <Image src={props.thumbnail||"http://saveabandonedbabies.org/wp-content/uploads/2015/08/default.png"} />
      </Video>
      <Descript>
        <MainTitle>{props.title}</MainTitle>
        <SubTitle>{props.description}</SubTitle>
        {(props.viewCount>=0)? <LookupCounter>
          조회수 {props.viewCount} | {props.publishedAt} 전
        </LookupCounter>:null}
      </Descript>
    </Card>
  );
};

Item.propTypes = {
    
};

export default withRouter(Item);