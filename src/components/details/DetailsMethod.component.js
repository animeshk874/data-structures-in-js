import { Fragment } from 'react';
import { ImplementedCodeBlock } from "./ImplementedCodeBlock.component";
import { getBeautifiedCode } from "./detailsUtil";
import { OperationDependencies } from './OperationDependencies.component';
import { OperationSource } from './OperationSource.component';


export default function DetailsMethod({ details, title, type, fallback }) {
  let data = [];
  if (type === `core`) {
    data = details?.operations?.filter(operation => (!operation.type || operation.type === type));
  } else if (type === `helper`) {
    data = details?.operations?.filter(operation => (operation.type === type));
  }

  if (data.length === 0) {
    return fallback;
  }

  return (
    <div className="method-container pt-2">
      <h4 className="method-container-heading">{title}: </h4>
      <ol className="method-list">
        {data?.map((operation, operationIndex) => (
          <li key={operation.methodName} className={"method-list-item " + ((operationIndex === (details.operations.length - 1)) ? "" : "mb-5 pb-5")}>
            <div id={operation.key}>
              <div className="method-section-title mt-2 mb-2">{operation?.methodName || '-'}</div>
              {operation.description && <div className="method-description mt-2 mb-2">{operation?.description || '-'}</div>}

              {operation?.implementationCode &&
                <ImplementedCodeBlock
                  code={getBeautifiedCode(operation.implementationCode)}
                />
              }
              {operation.parameters && operation.parameters.length > 0 &&
                <Fragment>
                  <div className="method-section-title mt-4 pt-3 mb-2">Parameters</div>
                  {operation.parameters.map((param) => {
                    return (
                      <div className="d-flex justify-content-start flex-wrap" key={param.name}>
                        <div className="method-parameter-name">- {param?.name}: &nbsp;</div>
                        <div className="method-parameter-description">{param?.description}</div>
                      </div>
                    );
                  })}
                </Fragment>}
              {operation.exampleCode &&
                <Fragment>
                  <div className="method-section-title mt-4 pt-3 mb-2">Usage</div>
                  <div className="implementation-code-container mt-3 mb-2 position-relative">
                    <pre>
                      <code className="javascript code-block">{getBeautifiedCode(operation.exampleCode)}</code>
                    </pre>
                  </div>
                </Fragment>}

              <OperationDependencies dependencies={operation.dependencies} details={details} />

              <OperationSource sources={operation.sources} />
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}


