import { Fragment } from 'react';
import { MethodSectionTitle } from './details.component'

export function OperationSource({ sources }:any) {
  if (!sources || sources.length === 0) {
    return null;
  }
  return (
    <Fragment>
      <MethodSectionTitle className="method-section-title mt-4 pt-3 mb-2">Sources</MethodSectionTitle>

      <div className='d-flex flex-wrap'>
        {sources?.map((source:any, index:number) => (
          <div className="method-source" key={index}>
            - <a target="_blank" rel="noreferrer noopener" href={source.url}>{source.label || source.url}</a>
          </div>
        ))}
      </div>
    </Fragment>
  );
}
