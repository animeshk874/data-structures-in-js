import { copyCodeBlock } from './detailsUtil';


export function ImplementedCodeBlock({ code }) {
  const handleCopy = () => copyCodeBlock(code);
  
  return (
    <div className="implementation-code-container mt-3 mb-4 position-relative">
      <div className="copy-button position-relative w-100">
        <button onClick={handleCopy}>Copy</button>
      </div>
      <pre>
        <code className="javascript code-block">{code}</code>
      </pre>
    </div>
  );
}
