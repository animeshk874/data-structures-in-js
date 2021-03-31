import { Fragment } from 'react';
import { getBeautifiedCode } from "./detailsUtil";

export function ExampleCode({ exampleCode }) {
  if (!exampleCode)
    return null;

  return (
    <Fragment>
      <div className="method-section-title mt-4 pt-3 mb-2">Usage</div>
      <div className="implementation-code-container mt-3 mb-2 position-relative">
        <pre>
          <code className="javascript code-block">{getBeautifiedCode(exampleCode)}</code>
        </pre>
      </div>
    </Fragment>
  );
}
