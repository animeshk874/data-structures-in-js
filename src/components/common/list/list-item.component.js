import classnames from 'classnames';
import './list-item.css';

export default function ListItem({ listItem, activeKey }) {
  return (
    <div
      className={classnames('list-item', {
        active: activeKey === listItem.key,
      })}
      tabIndex='0'
    >
      <p key={listItem.key}> {listItem.name} </p>
    </div>
  );
}
