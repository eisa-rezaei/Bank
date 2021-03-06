import React from "react";
import {Suspense, lazy} from "react";
import {HashRouter as Router, Switch, Route} from "react-router-dom";
import Layout from "./components/Layout";
import Loading from "./components/Loading";
import {GlobalStyle} from "./globalStyle";

const Home = lazy(() => import("./components/Home"));
const Statistic = lazy(() => import("./components/Statistic"));
const Card = lazy(() => import("./components/Card"));
const Profile = lazy(() => import("./components/Profile"));

const App = () => {
  return (
    <Suspense fallback={<Loading page />}>
      <Router>
        <Layout>
          <Switch>
            <Route path="/" exact children={<Home />} />
            <Route path="/statistic" exact children={<Statistic />} />
            <Route path="/card" exact children={<Card />} />
            <Route path="/profile" exact children={<Profile />} />
          </Switch>
        </Layout>
      </Router>
      <GlobalStyle />
    </Suspense>
  );
};

export default App;
