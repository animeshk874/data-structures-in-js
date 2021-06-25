import { Fragment } from 'react';
import { getDependencySignature } from "./detailsUtil";
import {MethodSectionTitle} from './details.component'

export function OperationDependencies({ dependencies, operations }:any) {
  if (!dependencies || dependencies.length === 0) {
    return null;
  }

  return (
    <Fragment>
      <MethodSectionTitle className="method-section-title mt-4 pt-3 mb-2">Dependencies</MethodSectionTitle>
      <div className='d-flex flex-wrap'>
        {dependencies?.map((dependency:any, index:number) => (
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
