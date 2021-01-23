import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import hljs from "highlight.js/lib/core";
import javascript from "highlight.js/lib/languages/javascript";
import copy from 'copy-to-clipboard';

import "highlight.js/styles/atom-one-light.css";
import './details.css';

hljs.registerLanguage("javascript", javascript);

const customId = "custom-id-toast";

export default function Details() {
  // const {allItems} = props;
  hljs.initHighlighting.called = false;
  let query = useQuery();
  let dataStructureKey = query.get("q");
  const [details, setDetails] = useState(null);

  useEffect(() => {
    if(!dataStructureKey){
      return;
    }
    fetch(`/data/data-structure-information/${dataStructureKey}.json`)
        .then((data) => data.json())
        .then((dataStructures) => {
          if (dataStructures) {
            setDetails(dataStructures);
            setTimeout(() => {
              hljs.initHighlighting();
          }, 0);
        }
        }).catch(error => console.error(error));
        // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dataStructureKey]);

  function copyCodeBlock(text) {
    copy(text);
    toast.dark('Copied!', {
      toastId: customId
    });
  }

  return (
    <div className="d-flex justify-content-center details-outer-container">
      {
        details ? (
          <div className="details-inner-container w-100">
            {
              <div className="item-title">
                <h3>{details.title || '-'}</h3>
              </div>
            }

            {
              details.description &&
              <div className="item-description">
                <p className="primary-text">{details.description}</p>
              </div>
            }

            {
              details.operations && details.operations.length ?
                <div className="method-container">
                  <h4 className="method-container-heading">
                    Operations/Methods:
                  </h4>
                  {
                    <ol className="method-list">
                      {details?.operations?.map(operation => (
                        <li key={operation.methodName} className="method-list-item">
                          <div>
                            {
                              <div className="method-name mt-2 mb-2">{operation?.methodName || '-'}</div>
                            }
                            {
                              operation.description && <div className="method-description mt-2 mb-2">{operation?.description || '-'}</div>
                            }
                            {
                              operation?.implementationCode &&
                              <>
                                <div className="implementation-code-container mt-3 mb-2 position-relative">
                                  <div className="copy-button position-relative w-100">
                                    <button onClick={() => copyCodeBlock(operation.implementationCode)}>Copy</button>
                                  </div>
                                  <pre>
                                    <code className="javascript code-block">{operation.implementationCode}</code>
                                  </pre>
                                </div>
                              </>
                            }
                          </div>
                        </li>
                      ))}
                    </ol>
                  }
                </div>
                : <div>No operations/methods found for this data structure.</div>
            }
          </div>
        ) : <p>Loading...</p>
      }
    </div>
  );
}

function useQuery() {
  return new URLSearchParams(useLocation().search);
}
