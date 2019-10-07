import gql from "graphql-tag";
export const CREATE_VIDEO = gql`
  mutation createVideo($schedule_id: String!) {
    createVideo(schedule_id: $schedule_id) {
      id
      youtubeId
      viewCount
      createdAt
      thumbnail
      schedule {
        id
        title
        desc
        status
        startTime
        endTime
      }
    }
  }
`;

export const VIDEO = gql`
   query video($schedule_id: String!) {
    video(schedule_id: $schedule_id) {
      id
      youtubeId
      viewCount
      createdAt
      thumbnail
      timeLinks {
        id
        seek
        desc
      }
      schedule {
        id
        title
        desc
        status
        startTime
        endTime
      }
    }
  }
`;

export const STREAMING = gql`
  mutation streamimg($schedule_id: String! $youtube_id: String! $status:String!) {
    streamimg(schedule_id:$schedule_id,youtube_id: $youtube_id,status:$status)
   
}

`;
