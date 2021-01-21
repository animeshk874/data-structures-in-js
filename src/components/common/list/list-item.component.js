import './list-item.css';

export default function ListItem(props) {
    const { listItem, activeKey } = props;

    return (
        <div className={`list-item ${activeKey === listItem.key ? 'active' : ''}`} tabIndex="0" >
            <p key={listItem.key}>
                {listItem.name}
            </p>
        </div>
    );
}
