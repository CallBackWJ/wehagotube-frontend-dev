import gql from "graphql-tag";
export const SCHEDULES = gql`
 query schedules($type: String! $keyword: String) {
    schedules(type: $type, keyword: $keyword) {
      id
      title
      desc
      status
      startTime
      endTime
    }
  }
`;

export const SCHEDULE = gql`
 query schedule($id: String!) {
    schedule(id: $id) {
      id
      title
      desc
      status
      startTime
      endTime
    }
  }
`;
export const CREATE_SCHEDULE = gql`
  mutation createSchedule(
    $title: String!
    $desc: String!
    $startTime: String!
    $endTime: String!
  ) {
    createSchedule(title: $title, desc: $desc, startTime: $startTime, endTime: $endTime)
    {
    id
    title
    desc
    status
    startTime
    endTime
    }
  }
`;


export const SCHEDULE_LIST = gql`
  {
    getVideoList(eventType: "upcoming", keyword: null) {
      id
      title
      description
      scheduledStartTime
    }
  }
`;