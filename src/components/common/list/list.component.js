import { useState } from 'react';
import {ListItem} from './list-item.component';
import Details from '../../details/details.component';
import {Route, BrowserRouter as Router, Link} from 'react-router-dom';

export function List() {
    const [list, setList] = useState([]);

    import('../../../data/data-structures.mjs').then((data) => {
        if(data && data.default && data.default.length){
            setList(data.default);
        }
    })
    .catch((error) => {
        console.error(error);
    });

    return (
        <Router>
        <div className="d-flex justify-content-center">
            {list.map((item) => {
                return (
                    <Link className="text-decoration-none" key={item.key} to={`/details?q=${item.key}`}>
                        <ListItem listItem={item}></ListItem>
                    </Link>
                );
            })}
        </div>
            <Route path="/details" render={(props) => (
    <Details allItems={list} />
  )}></Route>
        </Router>
    );
}

export default List;
