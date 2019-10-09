import React from "react";
import PropTypes from "prop-types";
import Layout from "../../components/video/searchVideo/Layout";
import Item from "../../components/video/searchVideo/Item";
import { SEARCH_VIDEO } from "../../graphql/video";
import { useQuery } from "react-apollo-hooks";

const SearchVideo = props => {
  const { data, error, loading, refetch } = useQuery(SEARCH_VIDEO, {
    variables: {
      keyword: props.keyword === "NONE" ? "" : props.keyword
    }
  });
  let empty = [];
  for (let i = 0; i < 8; i++) {
    empty.push(<Item key={i} />);
  }

  if (loading) return (
    <Layout>
        {empty}
    </Layout>
);
  if (error) return "error";

  const items = data.searchVideo.map((item, idx) => (
    <Item
      key={idx}
      id={item.schedule.id}
      title={item.schedule.title}
      timeLinks={item.timeLinks}
      thumbnail={item.thumbnail}
    />
  ));

  return <Layout>{items}</Layout>;
};

SearchVideo.propTypes = {};

export default SearchVideo;
