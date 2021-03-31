import { Fragment } from 'react';
import { getDependencySignature } from "./detailsUtil";


export function OperationDependencies({ dependencies, operations }) {
  if (!dependencies || dependencies.length === 0) {
    return null;
  }

  return (
    <Fragment>
      <div className="method-section-title mt-4 pt-3 mb-2">Dependencies</div>
      <div className='d-flex flex-wrap'>
        {dependencies?.map((dependency, index) => (
          <span className="method-dependency" key={dependency}>
            <a href={`#${dependency}`}>
              {(getDependencySignature(dependency, operations) || {}).methodName}
            </a>
            {
              index !== (dependencies.length - 1) &&
              <Fragment>,&nbsp;</Fragment>
            }
          </span>
        ))}
      </div>
    </Fragment>
  );
}
