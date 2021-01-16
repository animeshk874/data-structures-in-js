import './header.css';

export function Header() {
    function search(){
        console.log('Trying to search!');
        // add debounced search
    }

    return (
        <div className="m-4">
            <div className="search-container">
        <input type="text" name="search" id="search" className="header-search" onKeyUp={search} placeholder="Search for topics, keywords, functions..." />
        </div>
        </div>
    );
}

export default Header;
