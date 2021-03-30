import './header.css';

export default function Header() {
    function search() {
        console.log('Trying to search!');
        // add debounced search
    }

    return (
        <div className="m-4 d-flex justify-content-center">
            <div className="logo-container d-flex align-items-start">
                <img className="logo-image" src="/dry-ice.png" alt="logo" />
                <div className="site-name">dryice</div>
                {/* <input
                    id="search"
                    type="search"
                    name="search"
                    className="header-search"
                    onKeyUp={search}
                    placeholder="Search for topics, keywords, functions..."
                /> */}
            </div>
        </div>
    );
}
