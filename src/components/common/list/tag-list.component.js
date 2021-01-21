import ListItem from './list-item.component';
import { Link, useLocation } from 'react-router-dom';

export default function TagList(props) {
  const { list } = props;
  let query = new URLSearchParams(useLocation().search);

  const activeKey = query.get("q");


  return (
    <div className="d-flex justify-content-center">
      {list.map((item) => {
        return (
          <Link
            key={item.key}
            to={`/details?q=${item.key}`}
            className="text-decoration-none"
          >
            <ListItem listItem={item} activeKey={activeKey} />
          </Link>
        );
      })}
    </div>
  )
}

