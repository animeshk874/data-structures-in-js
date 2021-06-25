import { useEffect, useContext } from 'react';
import { useLocation } from 'react-router-dom';
import hljs from "highlight.js/lib/core";
import javascript from "highlight.js/lib/languages/javascript";
import marked from 'marked';
import DOMPurify from "dompurify";
import { DataContext } from '../../context/DataContext';
import DetailsMethod from './DetailsMethod.component';
import { MessageBox } from './MessageBox.component';
import { ImplementedCodeBlock } from './ImplementedCodeBlock.component';
import styled from "styled-components";
import ExternalLinkButtons from './ExternalLinkButtons.component';

// import "highlight.js/styles/atom-one-light.css";
import './details.css';

hljs.registerLanguage("javascript", javascript);

export default function Details() {
  const { data, dispatch }:any = useContext(DataContext); // const {allItems} = props;
  const { details, isError, isLoading } = data || {};
  let query :any= useQuery();

  let dataStructureKey = query.get("q");

  // useEffect(() => marked.setOptions({ gfm: true }), []); // Commenting this out because of an error in browser in console

  useEffect(() => {
    if (!dataStructureKey) return;
    dispatch({ details: null, isError: false, isLoading: true });
    fetch(`/data/data-structure-information/${dataStructureKey}.json`)
      .then((data) => data.json())
      .then((dataStructures) => {
        if (dataStructures) {
          dispatch({ details: dataStructures });
          setTimeout(() => hljs.highlightAll(), 0);
        }
      }).catch((error) => {
        console.error(error);
        dispatch({ isError: true });
      })
      .finally(() => {
        dispatch({ isLoading: false })
      });

    return () => dispatch({ details: null, isError: false, isLoading: true });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dataStructureKey]);

  if (!dataStructureKey) {
    return <MessageBox message={'No Data Structure Selected!'} />;
  }
  if (isLoading) {
    return <MessageBox message={'Loading...'} />;
  }

  if (isError) {
    return (
      <MessageBox message={'Something Went wrong. Unable to fetch the data.'} />
    );
  }
  return (
    <OuterContainer className="d-flex justify-content-center details-outer-container flex-wrap">
      {
        details ? (
          <div className="details-inner-container w-100">
            <div className="item-title">
              <h3>{details.title || '-'}</h3>
            </div>
            {
              details.description &&
              <div className="item-description">
                <PrimaryText className="primary-text" dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(marked(details.description || '')) }}></PrimaryText>
              </div>
            }

            <ImplementedCodeBlock code={details.classImplementationCode} />

            <DetailsMethod
              title={`Operations/Methods`}
              operations={details.operations}
              type={`core`}
              fallback={<div>No operations/methods found for this data structure.</div>}
            />

            <DetailsMethod
              title={`Helper methods`}
              operations={details.operations}
              type={`helper`}
              fallback={<></>}
            />

          </div>
        ) : <p>Loading...</p>
      }
      {details && <ExternalLinkButtons></ExternalLinkButtons>}
    </OuterContainer>
  );
}

export const OuterContainer = styled.div`
  width: 100%;
  margin-top: 40px;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.04);
  padding: 70px 50px;
  border-radius: 10px;
  background-color: ${props => {
    return props?.theme?.colors?.background
  }} ;
`;
export const PrimaryText = styled.p`
  color: ${props => {
    return props?.theme?.colors?.text?.content
  }};
`;

export const MethodSectionTitle = styled.div`
  color: ${props => {
    return props?.theme?.colors?.text?.content
  }};
`;

function useQuery() {
  const { search } = useLocation();
  if (typeof window === 'undefined') return;
  return new URLSearchParams(search);
}
