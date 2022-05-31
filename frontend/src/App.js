import { Route, Switch } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Home from './components/home';
import Main from './components/main';

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
  }, [])

  return (
    <>
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/main'>
          <Main />
        </Route>
      </Switch>
    </>
  )
};

export default App;