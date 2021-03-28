import { useState, useEffect, Fragment } from 'react';
import { useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import hljs from "highlight.js/lib/core";
import javascript from "highlight.js/lib/languages/javascript";
import copy from 'copy-to-clipboard';
import beautify from 'js-beautify';
import CONSTANTS from '../../utils/constants';

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
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!dataStructureKey) {
      return;
    }
    setDetails(null);
    setError(null);
    fetch(`/data/data-structure-information/${dataStructureKey}.json`)
      .then((data) => data.json())
      .then((dataStructures) => {
        if (dataStructures) {
          setDetails(dataStructures);
          setTimeout(() => {
            hljs.initHighlighting();
          }, 0);
        }
      }).catch(error => {
        console.error(error);
        setError(error);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dataStructureKey]);

  function getDependecySignature(dependencyKey) {
    if (!details || !details.operations) {
      return;
    }
    return details.operations.find((item) => item.key === dependencyKey) || {};
  }

  function copyCodeBlock(text) {
    copy(text);
    toast.dark('Copied!', {
      toastId: customId
    });
  }

  if (!dataStructureKey) {
    return (
      <div className="d-flex justify-content-center details-outer-container">
        No Data Structure Selected!
      </div>
    );
  }

  if (error) {
    return (
      <div className="d-flex justify-content-center details-outer-container">
        Something Went wrong. Unable to fetch the data.
      </div>
    );
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
              details.classImplementationCode &&
              <div className="implementation-code-container mt-3 mb-4 position-relative">
                <div className="copy-button position-relative w-100">
                  <button onClick={() => copyCodeBlock(getBeautifiedCode(details.classImplementationCode))}>Copy</button>
                </div>
                <pre>
                  <code className="javascript code-block">{getBeautifiedCode(details.classImplementationCode)}</code>
                </pre>
              </div>
            }
            {
              details.operations && details.operations.length ?
                <div className="method-container pt-2">
                  <h4 className="method-container-heading">
                    Operations/Methods:
                  </h4>
                  {
                    <ol className="method-list">
                      {details?.operations?.map((operation, operationIndex) => (
                        <li key={operation.methodName} className={"method-list-item " + ((operationIndex === (details.operations.length - 1)) ? "" : "mb-5 pb-5")}>
                          <div id={operation.key}>
                            {
                              <div className="method-section-title mt-2 mb-2">{operation?.methodName || '-'}</div>
                            }
                            {
                              operation.description && <div className="method-description mt-2 mb-2">{operation?.description || '-'}</div>
                            }
                            {
                              operation?.implementationCode &&
                              <Fragment>
                                <div className="implementation-code-container mt-3 mb-2 position-relative">
                                  <div className="copy-button position-relative w-100">
                                    <button onClick={() => copyCodeBlock(getBeautifiedCode(operation.implementationCode))}>Copy</button>
                                  </div>
                                  <pre>
                                    <code className="javascript code-block">{getBeautifiedCode(operation.implementationCode)}</code>
                                  </pre>
                                </div>
                              </Fragment>
                            }
                            {
                              operation.parameters && operation.parameters.length ?
                                <Fragment>
                                  <div className="method-section-title mt-4 pt-3 mb-2">Parameters</div>
                                  {
                                    operation.parameters.map((param) => {
                                      return (
                                        <div className="d-flex justify-content-start flex-wrap" key={param.name}>
                                          <div className="method-parameter-name">- {param?.name}: &nbsp;</div>
                                          <div className="method-parameter-description">{param?.description}</div>
                                        </div>
                                      )
                                    })
                                  }
                                </Fragment> : <Fragment></Fragment>
                            }
                            {
                              operation.exampleCode &&
                              <Fragment>
                                <div className="method-section-title mt-4 pt-3 mb-2">Usage</div>
                                <div className="implementation-code-container mt-3 mb-2 position-relative">
                                  <pre>
                                    <code className="javascript code-block">{getBeautifiedCode(operation.exampleCode)}</code>
                                  </pre>
                                </div>
                              </Fragment>
                            }
                            {
                              operation.dependencies && operation.dependencies.length ?
                                <Fragment>
                                  <div className="method-section-title mt-4 pt-3 mb-2">Dependencies</div>
                                  <div className='d-flex flex-wrap'>
                                    {
                                      operation.dependencies.map((dependency, index) => {
                                        return (
                                          <span className="method-dependency" key={dependency}>
                                            <a href={`#${dependency}`}>{(getDependecySignature(dependency) || {}).methodName}</a>{index === (operation.dependencies.length - 1) ? '' : <Fragment>,&nbsp;</Fragment>}
                                          </span>
                                        )
                                      })
                                    }
                                  </div>
                                </Fragment> : <Fragment></Fragment>
                            }
                            {
                              operation.sources && operation.sources.length ?
                                <Fragment>
                                  <div className="method-section-title mt-4 pt-3 mb-2">Sources</div>

                                  <div className='d-flex flex-wrap'>
                                    {
                                      operation.sources.map((source, index) => {
                                        return (
                                          <div className="method-source" key={index}>
                                            - <a target="_blank" rel="noreferrer noopener" href={source.url}>{source.label || source.url}</a>
                                          </div>
                                        )
                                      })
                                    }
                                  </div>
                                </Fragment> : <Fragment></Fragment>
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

function getBeautifiedCode(codeBlock) {
  return beautify(codeBlock, CONSTANTS.beautifyOptions);
}

function useQuery() {
  const { search } = useLocation();
  if (typeof window === 'undefined') return;
  return new URLSearchParams(search);
}
