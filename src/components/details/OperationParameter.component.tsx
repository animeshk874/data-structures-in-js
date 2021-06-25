import { Fragment } from 'react';
import { MethodSectionTitle } from './details.component'
import styled from 'styled-components'
export function OperationParameter({ parameters }:any) {
  if (!parameters || parameters.length === 0) {
    return null;
  }

  return (
    <Fragment>
      <MethodSectionTitle className="method-section-title mt-4 pt-3 mb-2">Parameters</MethodSectionTitle>
      {parameters?.map((param:any) => (
        <div className="d-flex justify-content-start flex-wrap" key={param.name}>
          <div className="method-parameter-name">- {param?.name}: &nbsp;</div>
          <MethodParamsDesc className="method-parameter-description">{param?.description}</MethodParamsDesc>
        </div>
      ))}
    </Fragment>
  );
}

export const MethodParamsDesc = styled.div`
  color: ${props => {
    return props?.theme?.colors?.text?.content
  }};
`;