import React from 'react';
import { VIDEO } from '../../../graphql/video';
import { useQuery } from 'react-apollo-hooks';
const LiveChat = props => {
  const { data, error, loading } = useQuery(VIDEO, {
    variables: { schedule_id: props.id }
  });

  if (loading) return '';
  if (error) return 'error';
  const videoId = data.video ? data.video.youtubeId : '';
  const src =
    'https://www.youtube.com/live_chat?v=' +
    videoId +
    '&embed_domain=wehagotube-frontend-dev.netlify.com';

  return (
    <iframe
      allowfullscreen=""
      frameborder="0"
      height="100%"
      src={src}
      width="100%"
    ></iframe>
  );
};

LiveChat.propTypes = {};

export default LiveChat;
