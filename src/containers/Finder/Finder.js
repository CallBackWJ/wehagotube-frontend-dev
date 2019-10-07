import React from "react";
import PropTypes from "prop-types";
import Layout from "../../components/finder/Layout";
import Menu from "../../components/finder/Menu";
import SearchBar from "../../components/finder/SearchBar";
import Item from "../../components/finder/Item";
import { withRouter } from "react-router-dom";
import LinearProgress from "@material-ui/core/LinearProgress";
import { SCHEDULES } from "../../graphql/schedule";
import { useQuery } from "react-apollo-hooks";
import moment from "moment";

const Finder = props => {

  const search = ( type, keyword) => {
    props.history.push(`/manage/${props.menu}/${type}/${keyword||"NONE"}/${props.id}`);
  };
  const menuClick=(menu)=>{
    props.history.push(`/manage/${menu}/${props.type}/${props.keyword||"NONE"}/${props.id}`);
  }
  const { data, error, loading, refetch } = useQuery(
    SCHEDULES,
    {
      variables: { type: props.type, keyword: props.keyword==="NONE"?"":props.keyword }
    }
  );

  if (loading) return <LinearProgress variant="query" />;
  if (error) return "error";

  const handleItemClick=(id)=>{
    props.history.push(`/manage/live/${props.type}/${props.keyword||"NONE"}/${id}`);
  }

  const items = data.schedules.map(item => (
    <Item
      key={item.id}
      id={item.id}
      title={item.title}
      desc={item.desc}
      status={item.status}
      time={moment(item.startTime)
        .format("예약일: YYYY-MM-DD 시간:HH:mm")
        .toString()}
      hour={moment
        .duration(moment(item.endTime).diff(moment(item.startTime)))
        .asMinutes()}
      onClick={handleItemClick}
    />
  ));

  return (
    <Layout>
      <Menu data={props.menu} onClick={menuClick} />
      <SearchBar onClick={search} type={props.type} />
      {items||"검색 결과가 없습니다."}
    </Layout>
  );
};

Finder.propTypes = {};

export default withRouter(Finder);
