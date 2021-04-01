import { Fragment } from 'react';
import { getBeautifiedCode } from "./detailsUtil";
import { CodeBlockContainer } from './ImplementedCodeBlock.component';
import { MethodSectionTitle } from './details.component'

export function ExampleCode({ exampleCode }) {
  if (!exampleCode)
    return null;

  return (
    <Fragment>
      <MethodSectionTitle className="method-section-title mt-4 pt-3 mb-2">Usage</MethodSectionTitle>
      <div className="implementation-code-container mt-3 mb-2 position-relative">
        <pre>
          <CodeBlockContainer className="javascript code-block">{getBeautifiedCode(exampleCode)}</CodeBlockContainer>
        </pre>
      </div>
    </Fragment>
  );
}
