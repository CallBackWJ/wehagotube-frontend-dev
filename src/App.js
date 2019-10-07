import React from "react";
import GlobalStyles from "./styles/GlobalStyles";

import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { Main, Manage, Search, Watch } from "./pages";

import { ApolloProvider as ApolloHooksProvider } from "react-apollo-hooks";
import { ApolloProvider } from "react-apollo";
import client from "./graphql/apolloClient";
import { VideoProvider } from "./contexts/VideoContext";


const App = () => {
  return (
    <VideoProvider>
      <ApolloProvider client={client}>
        <ApolloHooksProvider client={client}>
          <GlobalStyles />
          <Router>
            <Switch>
              <Route exact path="/" component={Main} />
              <Route path="/watch/:id" component={Watch} />
              <Route path="/search/:keyword" component={Search} />
              <Route path="/manage/:menu/:type/:keyword/:id" component={Manage} />
            </Switch>
          </Router>
        </ApolloHooksProvider>
      </ApolloProvider>
    </VideoProvider>
  );
};

export default App;
