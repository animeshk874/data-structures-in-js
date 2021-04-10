import { ImplementedCodeBlock } from "./ImplementedCodeBlock.component";
import { OperationDependencies } from './OperationDependencies.component';
import { OperationSource } from './OperationSource.component';
import { OperationParameter } from './OperationParameter.component';
import { ExampleCode } from './ExampleCode.component';
import { MethodSectionTitle } from './details.component';
import styled from "styled-components";


export default function DetailsMethod({ operations, title, type, fallback }) {
  let data = [];
  if (type === `core`) {
    data = operations?.filter(operation => (!operation.type || operation.type === type));
  } else {
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
          <LIComponent key={operation.methodName} className="method-list-item mb-5 pb-5">
            <div id={operation.key}>
              <MethodSectionTitle className="method-section-title mt-2 mb-2">{operation?.methodName || '-'}</MethodSectionTitle>
              {operation.description && <MethodSectionDescription className="method-description mt-2 mb-2">{operation?.description || '-'}</MethodSectionDescription>}

              <ImplementedCodeBlock code={operation.implementationCode} />

              <OperationParameter parameters={operation.parameters} />

              <ExampleCode exampleCode={operation.exampleCode} />

              <OperationDependencies dependencies={operation.dependencies} operations={operations} />

              <OperationSource sources={operation.sources} />
            </div>
          </LIComponent>
        ))}
      </ol>
    </div>
  );
}
export const MethodSectionDescription = styled.div`
  color: ${props => {
    return props?.theme?.colors?.text?.content
  }};
`;

export const LIComponent = styled.li`
  color: ${props => {
    return props?.theme?.colors?.text?.content
  }};
  border-color: ${props => {
    return props?.theme?.colors?.separator;
  }} !important;
`;