import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import Login from './Components/Login';
import { Route } from 'react-router-dom';
import Dashboard from './Components/Dashboard';
import InputData from './Components/InputData';

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path='/Login'>
            <Login />
          </Route>
          <Route path='/Input'>
            <InputData />
          </Route>
          <Route path='/'>
            <Dashboard />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
