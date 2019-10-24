/*eslint-disable*/
import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Loadable from 'react-loadable';
import Loading from './Loading/Loading';
import Navigations from './Navigations/Navigations';

const headerStyles = {
  display: 'block',
  width: '100%',
  backgroundColor: '#444444',
  padding: '20px 0',
};

const containerStyles = {
  display: 'block',
  width: '80%',
  margin: '0 auto',
};

const HomePage = Loadable({
  loader: () => import('../pages/HomePage' /* webpackChunkName: "home-page" */),
  loading: Loading,
  timedOut: 10000,
  pastDelay: 300,
});

const AboutPage = Loadable({
  loader: () =>
    import('../pages/AboutPage' /* webpackChunkName: "About-page" */),
  loading: Loading,
  timedOut: 10000,
  pastDelay: 300,
});

const PetPage = Loadable({
  loader: () => import('../pages/PetPage' /* webpackChunkName: "Pet-page" */),
  loading: Loading,
  timedOut: 10000,
  pastDelay: 300,
});

const PetsPage = Loadable({
  loader: () => import('../pages/PetsPage' /* webpackChunkName: "Pets-page" */),
  loading: Loading,
  timedOut: 10000,
  pastDelay: 300,
});

class App extends Component {
  state = {};

  render() {
    return (
      <>
        <header style={headerStyles}>
          <Navigations />
        </header>
        <section style={containerStyles}>
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/pets/:id" component={PetPage} />
            <Route path="/pets" component={PetsPage} />
            <Route path="/about" component={AboutPage} />
            <Redirect to="/" />
          </Switch>
        </section>
      </>
    );
  }
}

export default App;
