import { useState } from 'react';
import ListItem from './list-item.component';
import Details from '../../details/details.component';
import { Route, BrowserRouter as Router, Link, Redirect, Switch } from 'react-router-dom';

export default function List() {
    const [list, setList] = useState([]);

    import('../../../data/data-structures.mjs').then((data) => {
        if (data?.default?.length) setList(data.default);
    }).catch(error => console.error(error))

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

function TagList(props) {
    const { list } = props
    return (
        <div className="d-flex justify-content-center">
            {list.map((item) => {
                return (
                    <Link
                        key={item.key}
                        to={`/details?q=${item.key}`}
                        className="text-decoration-none"
                    >
                        <ListItem listItem={item} />
                    </Link>
                );
            })}
        </div>
    )
}
