import {useState} from 'react';
import {useLocation} from 'react-router-dom';
import './details.css';
import { toast } from 'react-toastify';
import hljs from "highlight.js/lib/core";
import javascript from "highlight.js/lib/languages/javascript";
import "highlight.js/styles/atom-one-light.css";
import copy from 'copy-to-clipboard';
hljs.registerLanguage("javascript", javascript);

const customId = "custom-id-toast";

export function Details() {
    // const {allItems} = props;
    hljs.initHighlighting.called = false;
    let query = useQuery();
    const dataStructureKey = query.get("q");
    const [details, setDetails] = useState(null);

    import(`../../data/data-structure-information/${dataStructureKey}.js`).then((data) => {
        if(data && data.default){
            setDetails(data.default);
            setTimeout(() => {
                hljs.initHighlighting();
            }, 0);
        }
    })
    .catch((error) => {
        console.error(error);
    });

    // function copyCodeBlock(text){
    //     copy(text);
    //     toast.dark('Copied!', {
    //         toastId: customId
    //     });
    // }

    return (
        <div className="d-flex justify-content-center details-outer-container">
            {
                details ? 
                    (<div className="details-inner-container w-100">
                        {details.title ? <div className="item-title"><h3>{details.title}</h3></div> : <></>}
                        {details.description ? <div className="item-description"><p className="primary-text">{details.description}</p></div> : <></>}
                        {
      <pre>
        <code className="javascript code-block">{details.code}</code>
      </pre>
      }
      {
    //   <button onClick={() => copyCodeBlock(details.code)}>Copy</button>
      }
                    </div>) : <p>Loading...</p>
            }
        </div>
    );
}

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

export default Details;
