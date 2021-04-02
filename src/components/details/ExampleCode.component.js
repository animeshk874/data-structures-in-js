import { Fragment } from 'react';
import { CodeBlockContainer } from './ImplementedCodeBlock.component';
import { MethodSectionTitle } from './details.component'

export function ExampleCode({ exampleCode }) {

  if (!exampleCode)
    return null;

  return (
    <Fragment>
      <MethodSectionTitle className="method-section-title mt-4 pt-3 mb-2">Usage</MethodSectionTitle>
      <CodeBlockContainer code={exampleCode} />
    </Fragment>
  );
}
