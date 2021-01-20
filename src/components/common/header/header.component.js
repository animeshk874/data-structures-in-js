import './header.css';

export default function Header() {
    function search() {
        console.log('Trying to search!');
        // add debounced search
    }

    return (
        <div className="m-4">
            <div className="search-container">
                <input
                    id="search"
                    type="search"
                    name="search"
                    className="header-search"
                    onKeyUp={search}
                    placeholder="Search for topics, keywords, functions..."
                />
            </div>
        </div>
    );
}
