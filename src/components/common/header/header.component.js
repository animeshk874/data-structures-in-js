import './header.css';
import { useTheme } from '../../../hooks/theme'
import { getFromLS } from '../../../utils/storage'

export default function Header() {
    const { setMode } = useTheme()
    // function search() {
    //     console.log('Trying to search!');
    //     // add debounced search
    // }

    function handleChange() {
        const localTheme = getFromLS('mode');
        if (localTheme === 'dark') setMode('light');
        else setMode('dark')
    }
    return (
        <div className="m-4 d-flex justify-content-between align-item-center">
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
            <button
                className=""
                onClick={handleChange}
            >
                {(getFromLS('mode') === 'dark') ?
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                    >
                        <path
                            d="M8,2 C4.5,2.9 2,6.1 2,9.9 C2,14.4 5.6,18 10.1,18 C13.9,18 17,15.5 18,12 C11.9,13.7 6.3,8.1 8,2 Z"
                        >
                        </path>
                    </svg> :

                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                    >
                        <rect width="2" height="2" x="9" y="2"></rect>
                        <rect width="2" height="2" x="13.88" y="4.051" transform="rotate(45.02 14.88 5.051)"></rect>
                        <rect width="2" height="2" x="16" y="9"></rect><rect width="2" height="2" x="13.949" y="14.019" transform="rotate(-135.02 14.95 15.019)"></rect>
                        <rect width="2" height="2" x="9" y="16"></rect><rect width="2" height="2" x="3.98" y="13.949" transform="rotate(-134.98 4.98 14.95)"></rect>
                        <rect width="2" height="2" x="2" y="9"></rect><rect width="2" height="2" x="4.05" y="4.121" transform="rotate(44.98 5.05 5.12)"></rect>
                        <path d="M10,6 C7.8,6 6,7.8 6,10 C6,12.2 7.8,14 10,14 C12.2,14 14,12.2 14,10 C14,7.8 12.2,6 10,6 Z"></path>
                    </svg>
                }
            </button>
        </div>
    );
}
