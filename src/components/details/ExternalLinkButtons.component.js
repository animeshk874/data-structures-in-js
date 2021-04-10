import { Fragment } from "react";
import styled from "styled-components";
import { useTheme } from '../../context/ThemeContext';

// import './details.css';

export default function ExternalLinkButtons() {
  const { selectMode, selectedTheme } = useTheme();
  const externalLinks = [
    {
      url: 'https://github.com/animeshk874/data-structures-in-js',
      label: 'View it on GitHub',
      imageUrl: '/github-button.png',
    },
    {
    url: 'https://chrome.google.com/webstore/detail/dryice/nnmdkginmhadcfifcaflfkidllcemhmb?hl=en-GB&authuser=0',
    label: 'Available in the Chrome Web Store',
    imageUrl: '/webstore-transparent.png',
    },
    {
      url: 'https://www.youtube.com/watch?v=ZhIFuPt70dY&lc=UgwRBrL0UG3cahD7AXl4AaABAg',
      label: 'Watch Tutorial on YouTube',
      imageUrl: '/youtube-button.png',
    }
  ];

  return (
    <Wrapper className="d-flex justify-content-center flex-wrap flex-start align-items-start">
      <div className="button-container d-flex flex-wrap justify-content-center">
        {
          externalLinks.map(externalLink => 
            <Fragment key={externalLink.url}>
              <ButtonWrapper as="a" href={externalLink?.url} target="_blank" className="button cursor-pointer">
                <ButtonImage src={externalLink?.imageUrl} />
              </ButtonWrapper>
            </Fragment>
          )
        }
      </div>
    </Wrapper>
  );
}

export const Wrapper = styled.div``;

const ButtonWrapper = styled.div`
{
  background-color: ${props => {
    return props?.theme?.colors?.externalButtonBg
  }};
  border-radius: 10px;
  overflow: hidden;
  margin: 5px;
}
`;

const ButtonImage = styled.img`
{
  height: 60px;
}
`;