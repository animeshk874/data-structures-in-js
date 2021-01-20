import './list-item.css';

export default function ListItem(props) {
    const { listItem } = props;

    return (
        <div className="list-item" tabIndex="0">
            <p key={listItem.key}>
                {listItem.name}
            </p>
        </div>
    );
}
