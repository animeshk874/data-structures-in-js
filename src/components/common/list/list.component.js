import { useState, useEffect } from 'react';
import { Route, BrowserRouter as Router, Redirect, Switch } from 'react-router-dom';
import TagList from './tag-list.component';
import Details from '../../details/details.component';

export default function List() {
  const [list, setList] = useState([]);

  useEffect(() => {
    fetch('/data/data-structures.json')
      .then((data) => data.json())
      .then((dataStructures) => {
        if (dataStructures?.length) setList(dataStructures);
      }).catch(error => console.error(error))
  }, []);


  return (
    <Router>
      <TagList list={list} />

      <Switch>
        <Route exact path='/' render={() => <Redirect to='/details?q=linked-list' />} />
        <Route path="/details" render={() => <Details allItems={list} />} />
      </Switch>
    </Router>
  );
}


