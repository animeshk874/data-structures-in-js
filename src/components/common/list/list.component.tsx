import { Route, BrowserRouter as Router, Redirect, Switch } from 'react-router-dom';
import TagList from './tag-list.component';
import Details from '../../details/details.component';

export default function List() {
  return (
    <Router>
      <TagList />
      <Switch>
        <Route exact path='/' render={() => <Redirect to='/details?q=linked-list' />} />
        <Route path="/details" render={() => <Details />} />
      </Switch>
    </Router>
  );
}
