import { Fragment } from 'react';

export function OperationParameter({ parameters }) {
  if (!parameters || parameters.length === 0) {
    return null;
  }

  return (
    <Fragment>
      <div className="method-section-title mt-4 pt-3 mb-2">Parameters</div>
      {parameters.map((param) => {
        return (
          <div className="d-flex justify-content-start flex-wrap" key={param.name}>
            <div className="method-parameter-name">- {param?.name}: &nbsp;</div>
            <div className="method-parameter-description">{param?.description}</div>
          </div>
        );
      })}
    </Fragment>
  );
}
