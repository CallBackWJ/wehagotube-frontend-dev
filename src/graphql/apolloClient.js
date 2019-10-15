import { ApolloClient ,split} from "apollo-boost";
import { createUploadLink } from "apollo-upload-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { WebSocketLink } from "apollo-link-ws";
import { getMainDefinition } from 'apollo-utilities';
const wsLink = new WebSocketLink({
  // uri: 'https://wehagotube-backend-dev.herokuapp.com/',
  uri: "ws://localhost:4000/",
  options: {
    reconnect: true
  }
});

const uploadLink = createUploadLink({
  // uri: 'https://wehagotube-backend-dev.herokuapp.com/',
  uri: "http://localhost:4000/",
  headers: {
    Authorization: `Bearer ${window.sessionStorage.getItem("token")}`
  }
});
const link = split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === 'OperationDefinition' &&
      definition.operation === 'subscription'
    );
  },
  wsLink,
  uploadLink,
);
const client = new ApolloClient({
  link: link,
  cache: new InMemoryCache()
});

export default client;
