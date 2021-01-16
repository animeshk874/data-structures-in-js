import {useState} from 'react';
import {useLocation} from 'react-router-dom';
import './details.css';

export function Details() {
    // const {allItems} = props;
    let query = useQuery();
    const dataStructureKey = query.get("q");
    const [details, setDetails] = useState(null);

    import(`../../data/data-structure-information/${dataStructureKey}.js`).then((data) => {
        if(data && data.default){
            setDetails(data.default);
        }
    })
    .catch((error) => {
        console.error(error);
    });

    return (
        <div className="d-flex justify-content-center details-outer-container">
            {
                details ? 
                    (<div className="details-inner-container w-100">
                        {details.title ? <div className="item-title"><h3>{details.title}</h3></div> : <></>}
                        {details.description ? <div className="item-description"><p className="primary-text">{details.description}</p></div> : <></>}
                    </div>) : <p>Loading...</p>
            }
        </div>
    );
}

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

export default Details;
