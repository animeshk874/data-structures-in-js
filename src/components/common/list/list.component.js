import { useState } from 'react';
import ListItem from './list-item.component';
import Details from '../../details/details.component';
import { Route, BrowserRouter as Router, Link } from 'react-router-dom';

export default function List() {
    const [list, setList] = useState([]);

    import('../../../data/data-structures.mjs').then((data) => {
        if (data?.default?.length) setList(data.default);
    }).catch((error) => {
        console.error(error);
    });

    return (
        <Router>
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
            <Route
                path="/details"
                render={props => (
                    <Details allItems={list} />
                )}
            />
        </Router>
    );
}
