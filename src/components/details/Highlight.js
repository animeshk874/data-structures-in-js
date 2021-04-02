
import styled from 'styled-components'
const Wrapper = styled.div`

&.dark{
  /*

Atom One Dark With support for ReasonML by Gidi Morris, based off work by Daniel Gamage

Original One Dark Syntax theme from https://github.com/atom/one-dark-syntax

*/
.hljs {
  display: block;
  overflow-x: auto;
  padding: 0.5em;
  color: #abb2bf;
  background: #282c34;
}
.hljs-keyword, .hljs-operator {
  color: #F92672;
}
.hljs-pattern-match {
  color: #F92672;
}
.hljs-pattern-match .hljs-constructor {
  color: #61aeee;
}
.hljs-function {
  color: #61aeee;
}
.hljs-function .hljs-params {
  color: #A6E22E;
}
.hljs-function .hljs-params .hljs-typing {
  color: #FD971F;
}
.hljs-module-access .hljs-module {
  color: #7e57c2;
}
.hljs-constructor {
  color: #e2b93d;
}
.hljs-constructor .hljs-string {
  color: #9CCC65;
}
.hljs-comment, .hljs-quote {
  color: #b18eb1;
  font-style: italic;
}
.hljs-doctag, .hljs-formula {
  color: #c678dd;
}
.hljs-section, .hljs-name, .hljs-selector-tag, .hljs-deletion, .hljs-subst {
  color: #e06c75;
}
.hljs-literal {
  color: #56b6c2;
}
.hljs-string, .hljs-regexp, .hljs-addition, .hljs-attribute, .hljs-meta-string {
  color: #98c379;
}
.hljs-built_in, .hljs-class .hljs-title {
  color: #e6c07b;
}
.hljs-attr, .hljs-variable, .hljs-template-variable, .hljs-type, .hljs-selector-class, .hljs-selector-attr, .hljs-selector-pseudo, .hljs-number {
  color: #d19a66;
}
.hljs-symbol, .hljs-bullet, .hljs-link, .hljs-meta, .hljs-selector-id, .hljs-title {
  color: #61aeee;
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