import gql from "graphql-tag";
export const SCHEDULES = gql`
  query schedules($type: String!, $keyword: String) {
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
    video(schedule_id: $id) {
      viewCount
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
    createSchedule(
      title: $title
      desc: $desc
      startTime: $startTime
      endTime: $endTime
    ) {
      id
      title
      desc
      status
      startTime
      endTime
    }
  }
`;

export const LATEST_SCHEDULE_LIST = gql`
  query latestScheduleList($page: Int!) {
    latestScheduleList(page: $page) {
      id
      title
      desc
      status
      startTime
      endTime
    }
  }
`;
export const UPDATE_SCHEDULE = gql`
  mutation updateSchedule(
    $id: String!
    $title: String!
    $desc: String!
    $startTime: String!
    $endTime: String!
    $status: String!
  ) {
    updateSchedule(
      id: $id
      title: $title
      desc: $desc
      startTime: $startTime
      endTime: $endTime
      status: $status
    )
  }
`;
export const PUBSUB_SCHEDULE = gql`
  subscription {
    pubsubSchedule {
      id
      title
      desc
      status
      startTime
      endTime
    }
  }
`;
