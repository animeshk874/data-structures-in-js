
import styled from 'styled-components'
const Wrapper = styled.div`

&.dark{
  .hljs{
    display:block;
    overflow-x:auto;
    padding:.5em;
    background:#23241f
  }

  .hljs,
  .hljs-subst,.hljs-tag{
    color:#f8f8f2
  }

  .hljs-emphasis,
  .hljs-strong{color:#a8a8a2}
  .hljs-bullet,.hljs-link,.hljs-literal,.hljs-number,.hljs-quote,.hljs-regexp{color:#ae81ff}
  .hljs-code,.hljs-section,.hljs-selector-class,.hljs-title{color:#a6e22e}
  .hljs-strong{font-weight:700}
  .hljs-emphasis{font-style:italic}
  .hljs-attr,.hljs-keyword,.hljs-name,.hljs-selector-tag{color:#f92672}
  .hljs-attribute,.hljs-symbol{color:#66d9ef}
  .hljs-class .hljs-title,.hljs-params{color:#f8f8f2}
  .hljs-addition,.hljs-built_in,.hljs-builtin-name,.hljs-selector-attr,.hljs-selector-id,.hljs-selector-pseudo,.hljs-string,.hljs-template-variable,.hljs-type,.hljs-variable{color:#e6db74}
  .hljs-comment,.hljs-deletion,.hljs-meta{color:#75715e}
}
&.light{

  .hljs {
    display: block;
    overflow-x: auto;
    padding: 0.5em;
    color: #383a42;
    background: #fafafa;
  }
  
  .hljs-comment,
  .hljs-quote {
    color: #a0a1a7;
    font-style: italic;
  }
  
  .hljs-doctag,
  .hljs-keyword,
  .hljs-formula {
    color: #a626a4;
  }
  
  .hljs-section,
  .hljs-name,
  .hljs-selector-tag,
  .hljs-deletion,
  .hljs-subst {
    color: #e45649;
  }
  
  .hljs-literal {
    color: #0184bb;
  }
  
  .hljs-string,
  .hljs-regexp,
  .hljs-addition,
  .hljs-attribute,
  .hljs-meta-string {
    color: #50a14f;
  }
  
  .hljs-built_in,
  .hljs-class .hljs-title {
    color: #c18401;
  }
  
  .hljs-attr,
  .hljs-variable,
  .hljs-template-variable,
  .hljs-type,
  .hljs-selector-class,
  .hljs-selector-attr,
  .hljs-selector-pseudo,
  .hljs-number {
    color: #986801;
  }
  
  .hljs-symbol,
  .hljs-bullet,
  .hljs-link,
  .hljs-meta,
  .hljs-selector-id,
  .hljs-title {
    color: #4078f2;
  }
  
  .hljs-emphasis {
    font-style: italic;
  }
  
  .hljs-strong {
    font-weight: bold;
  }
  
  .hljs-link {
    text-decoration: underline;
  }
}
`

export function ReactHighlight({ mode, children }) {
  return (
    <Wrapper className={mode === 'Dark' ? 'dark' : "light"}>
      {children}
    </Wrapper>
  )
}