import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './styles/main.css';
import DefaultLayout from './ui/layouts/DefaultLayout';
import LoadingSpinner from './ui/loading/LoadingSpinner';

const Home = lazy(() => import('./components/home'));
const Linear = lazy(() => import('./components/linear'));
const Objects = lazy(() => import('./components/objects'));

const routes = [
  {
    key: 1,
    path: '/',
    exact: true,
    component: Home,
  },
  {
    key: 2,
    path: '/linear',
    exact: true,
    component: Linear,
  },
  {
    key: 3,
    path: '/objects',
    exact: true,
    component: Objects,
  },
];

const WaitingComponent = Component => {
  return props => (
    <DefaultLayout>
      <Suspense fallback={<LoadingSpinner />}>
        <Component {...props} />
      </Suspense>
    </DefaultLayout>
  );
};

const App = () => (
  <Router>
    {routes.map(route => (
      <Route
        key={route.path}
        path={route.path}
        exact={route.exact}
        component={WaitingComponent(route.component)}
      />
    ))}
  </Router>
);

export default App;
