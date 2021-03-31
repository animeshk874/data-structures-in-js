import { ImplementedCodeBlock } from "./ImplementedCodeBlock.component";
import { OperationDependencies } from './OperationDependencies.component';
import { OperationSource } from './OperationSource.component';
import { OperationParameter } from './OperationParameter.component';
import { ExampleCode } from './ExampleCode.component';


export default function DetailsMethod({ operations, title, type, fallback }) {
  let data = [];
  if (type === `core`) {
    data = operations?.filter(operation => (!operation.type || operation.type === type));
  } else if (type === `helper`) {
    data = operations?.filter(operation => (operation.type === type));
  }

  if (!data || data.length === 0) {
    return fallback;
  }

  return (
    <div className="method-container pt-2">
      <h4 className="method-container-heading">{title}: </h4>
      <ol className="method-list">
        {data?.map((operation, operationIndex) => (
          <li key={operation.methodName} className={"method-list-item " + ((operationIndex === (operations.length - 1)) ? "" : "mb-5 pb-5")}>
            <div id={operation.key}>
              <div className="method-section-title mt-2 mb-2">{operation?.methodName || '-'}</div>
              {operation.description && <div className="method-description mt-2 mb-2">{operation?.description || '-'}</div>}

              <ImplementedCodeBlock code={operation.implementationCode} />

              <OperationParameter parameters={operation.parameters} />

              <ExampleCode exampleCode={operation.exampleCode} />

              <OperationDependencies dependencies={operation.dependencies} operations={operations} />

              <OperationSource sources={operation.sources} />
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
