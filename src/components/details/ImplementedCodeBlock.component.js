import { copyCodeBlock, getBeautifiedCode } from './detailsUtil';

export function ImplementedCodeBlock({ code }) {

  const beautifiedCode = getBeautifiedCode(code);

  const handleCopy = () => copyCodeBlock(beautifiedCode);
  if (!code) return null

  return (
    <div className="implementation-code-container mt-3 mb-4 position-relative">
      <div className="copy-button position-relative w-100">
        <button onClick={handleCopy}>Copy</button>
      </div>
      <pre>
        <code className="javascript code-block">{beautifiedCode}</code>
      </pre>
    </div>
  );
}
