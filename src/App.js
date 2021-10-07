import React, { useEffect } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Redirect,
  Switch,
  Route,
} from 'react-router-dom';
import PageOne from './components/pageOne';
import PageTwo from './components/pageTwo';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path='/' component={PageOne} />
          <Route exact path='/pageone' component={PageOne} />
          <Route exact path='/pagetwo' component={PageTwo} />
          {/* <Route path='/testPage' component={testTable} /> */}

          {/* <Route
            render={() => {
              if (autheticated) {
                return <Redirect to='/dashboard' />;
              } else {
                return <Redirect to='/login' />;
              }
            }}
          /> */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
