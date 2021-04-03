import { useEffect, useContext } from 'react'
import ListItem from './list-item.component';
import { Link, useLocation } from 'react-router-dom';
import { DataContext } from '../../../context/DataContext'

export default function TagList() {
  const { data: { dataStructures }, dispatch } = useContext(DataContext);
  let query = new URLSearchParams(useLocation().search);

  const activeKey = query.get("q");

  useEffect(() => {
    dispatch({ dataStructureKey: activeKey })
  }, [dispatch, activeKey])

  return (
    <div className="d-flex justify-content-center flex-wrap">
      {dataStructures.map((item) => (
        <Link
          key={item.key}
          to={`/details?q=${item.key}`}
          className="text-decoration-none"
        >
          <ListItem listItem={item} activeKey={activeKey} />
        </Link>
      ))}
    </div>
  )
}

