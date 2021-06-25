import styled from 'styled-components'
import { copyCodeBlock, getBeautifiedCode } from './detailsUtil';
import { ReactHighlight } from './Highlight'
import { useTheme } from '../../context/ThemeContext';

export const ImplementedCodeBlock: React.FC<any> = ({ code }) => {

  const beautifiedCode = getBeautifiedCode(code);

  const handleCopy = () => copyCodeBlock(beautifiedCode);

  if (!code) return null;

  return (
    <CodeBlockContainer code={code} >
      <div className="copy-button position-relative w-100">
        <CopyButton onClick={handleCopy}>Copy</CopyButton>
      </div>
    </CodeBlockContainer>
  );
}

export const CodeBlockContainer: React.FC<any> = ({ code, children }) => {
  const { selectedTheme } :any= useTheme()
  const beautifiedCode = getBeautifiedCode(code);

  return (
    <div className="implementation-code-container mt-3 mb-4 position-relative">
      {children}
      <ReactHighlight mode={selectedTheme?.name}>
        <pre>
          <code className="javascript code-block">{beautifiedCode}</code>
        </pre>
      </ReactHighlight>
    </div>
  )
}

const CopyButton = styled.button`
  background-color: ${({ theme }) => {
    return (theme.name === 'Dark') ? '#445168' : '#ecf6ff'
  }} !important;
  color: ${({ theme }) => {
    return (theme.name === 'Dark') ? '#fafafa' : '#689fd2'
  }} !important;
`;