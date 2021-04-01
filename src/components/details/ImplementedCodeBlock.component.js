import { copyCodeBlock, getBeautifiedCode } from './detailsUtil';

import styled from 'styled-components'
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
        <CodeBlockContainer className="javascript code-block">{beautifiedCode}</CodeBlockContainer>
      </pre>
    </div>
  );
}

export const CodeBlockContainer = styled.code`
 `;
//  background-color: ${({ theme }) => {
//     return (theme.name === 'Dark') ? '#303742' : '#fafafa'
//   }} !important;