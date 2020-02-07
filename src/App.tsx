import React, { Suspense } from 'react';
import { Switch, } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import Header from './components/header/header.component';
import Spinner from './components/spinner/spinner.component';
import ErrorBoundary from './components/error-boundary/error-boundary.component';

import { GlobalStyle } from './global.styles';
import { routes, RouteWithSubRoutes } from './routes';

const App = () => {
  return (
    <div>
      <GlobalStyle />
      <Header />
      <ErrorBoundary>
        <Switch>
          <Suspense fallback={<Spinner />}>

            {routes.map((route: any, i: number) => (
              <RouteWithSubRoutes key={i} {...route} />
            ))}
          </Suspense>
        </Switch>
      </ErrorBoundary>
    </div>

  );
};

const mapStateToProps = createStructuredSelector({

});

const mapDispatchToProps = (dispatch: any) => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
