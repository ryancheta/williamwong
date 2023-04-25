import LandingPage from './components/landing';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Sunovion from './components/Work/Sunovion';
import TNF from './components/Work/TNF';

function App() {
  return (
    <Router>
      <Route exact path="/" component={LandingPage} />
      <Route exact path="/sunovion" component={Sunovion} />
      <Route exact path="/tnf" component={TNF} />
    </Router>
  );
}

export default App;
