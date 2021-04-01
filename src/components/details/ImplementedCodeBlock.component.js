import { copyCodeBlock, getBeautifiedCode } from './detailsUtil';
import { ReactHighlight } from './Highlight'

import styled from 'styled-components'
import { useContext } from 'react';
import { ThemeStateProvider } from '../../context/Theme';
export function ImplementedCodeBlock({ code, theme }) {

  const beautifiedCode = getBeautifiedCode(code);
  const { selectedTheme } = useContext(ThemeStateProvider)

  const handleCopy = () => copyCodeBlock(beautifiedCode);
  if (!code) return null

  return (
    <div className="implementation-code-container mt-3 mb-4 position-relative">
      <div className="copy-button position-relative w-100">
        <CopyButton onClick={handleCopy}>Copy</CopyButton>
      </div>
      <ReactHighlight mode={selectedTheme?.name}>
        <pre>
          <CodeBlockContainer className="javascript code-block">{beautifiedCode}</CodeBlockContainer>
        </pre>
      </ReactHighlight>
    </div>
  );
}

const CopyButton = styled.button`
  background-color: ${({ theme }) => {
    return (theme.name === 'Dark') ? '#303742' : '#ecf6ff'
  }} !important;
  color: ${({ theme }) => {
    return (theme.name === 'Dark') ? '#fafafa' : '#689fd2'
  }} !important;
`;
export const CodeBlockContainer = styled.code`
 `;
//  background-color: ${({ theme }) => {
//     return (theme.name === 'Dark') ? '#303742' : '#fafafa'
//   }} !important;