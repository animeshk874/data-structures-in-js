import { Fragment } from 'react';


export function OperationSource({ sources }) {
  if (!sources || sources.length === 0) {
    return null;
  }
  return (
    <Fragment>
      <div className="method-section-title mt-4 pt-3 mb-2">Sources</div>

      <div className='d-flex flex-wrap'>
        {sources?.map((source, index) => (
          <div className="method-source" key={index}>
            - <a target="_blank" rel="noreferrer noopener" href={source.url}>{source.label || source.url}</a>
          </div>
        ))}
      </div>
    </Fragment>
  );
}
