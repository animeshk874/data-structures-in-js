import { useContext } from 'react';
import { ThemeStateProvider } from '../../../context/Theme'
import styled from 'styled-components';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';


export default function Header() {
    const { selectMode, selectedTheme } = useContext(ThemeStateProvider)
    function handleChange() {
        if (selectedTheme?.name === 'Dark') selectMode('light')
        else selectMode('dark');
    }

    return (
        <HeaderContainer className="mt-4 mb-4 d-flex justify-content-between align-items-center">
            <div className="logo-container d-flex align-items-start">
                <LogoImage src="/dry-ice.png" alt="logo" />
                <SiteName >dryice</SiteName>
            </div>
            <div className="d-flex justify-content-center align-items-center">
                <Tippy content="Github" touch={false}>
                    <GithubIcon className="github-icon m-2" onClick={() => {window.open('https://github.com/animeshk874/data-structures-in-js', '_blank')}}>
                    <svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 20 20" height="20px" id="Layer_1" version="1.1" viewBox="0 0 512 512" width="20px">
                        <g>
                        <path clipRule="evenodd" d="M296.133,354.174c49.885-5.891,102.942-24.029,102.942-110.192 c0-24.49-8.624-44.448-22.67-59.869c2.266-5.89,9.515-28.114-2.734-58.947c0,0-18.139-5.898-60.759,22.669   c-18.139-4.983-38.09-8.163-56.682-8.163c-19.053,0-39.011,3.18-56.697,8.163c-43.082-28.567-61.22-22.669-61.22-22.669   c-12.241,30.833-4.983,53.057-2.718,58.947c-14.061,15.42-22.677,35.379-22.677,59.869c0,86.163,53.057,104.301,102.942,110.192   c-6.344,5.452-12.241,15.873-14.507,30.387c-12.702,5.438-45.808,15.873-65.758-18.592c0,0-11.795-21.31-34.012-22.669   c0,0-22.224-0.453-1.813,13.592c0,0,14.96,6.812,24.943,32.653c0,0,13.6,43.089,76.179,29.48v38.543   c0,5.906-4.53,12.702-15.865,10.89C96.139,438.977,32.2,354.626,32.2,255.77c0-123.807,100.216-224.022,224.03-224.022   c123.347,0,224.023,100.216,223.57,224.022c0,98.856-63.946,182.754-152.828,212.688c-11.342,2.266-15.873-4.53-15.873-10.89   V395.45C311.1,374.577,304.288,360.985,296.133,354.174L296.133,354.174z M512,256.23C512,114.73,397.263,0,256.23,0   C114.73,0,0,114.73,0,256.23C0,397.263,114.73,512,256.23,512C397.263,512,512,397.263,512,256.23L512,256.23z" fill={(selectedTheme?.name === 'Dark') ? "#c2c6ca" : "#525860"} fillRule="evenodd">
                        </path>
                        </g>
                    </svg>
                    </GithubIcon>
                </Tippy>

                <Tippy content="Toggle Dark Mode" touch={false}>
                    <ThemeToggler onClick={handleChange}>
                        {(selectedTheme?.name === 'Dark') ?
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                viewBox="0 0 20 20"
                                fill="#c2c6ca"
                            >
                                <path
                                    d="M8,2 C4.5,2.9 2,6.1 2,9.9 C2,14.4 5.6,18 10.1,18 C13.9,18 17,15.5 18,12 C11.9,13.7 6.3,8.1 8,2 Z"
                                >
                                </path>
                            </svg> :

                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                viewBox="0 0 20 20"
                                fill="#525860"
                            >
                                <rect width="2" height="2" x="9" y="2"></rect>
                                <rect width="2" height="2" x="13.88" y="4.051" transform="rotate(45.02 14.88 5.051)"></rect>
                                <rect width="2" height="2" x="16" y="9"></rect><rect width="2" height="2" x="13.949" y="14.019" transform="rotate(-135.02 14.95 15.019)"></rect>
                                <rect width="2" height="2" x="9" y="16"></rect><rect width="2" height="2" x="3.98" y="13.949" transform="rotate(-134.98 4.98 14.95)"></rect>
                                <rect width="2" height="2" x="2" y="9"></rect><rect width="2" height="2" x="4.05" y="4.121" transform="rotate(44.98 5.05 5.12)"></rect>
                                <path d="M10,6 C7.8,6 6,7.8 6,10 C6,12.2 7.8,14 10,14 C12.2,14 14,12.2 14,10 C14,7.8 12.2,6 10,6 Z"></path>
                            </svg>
                        }
                    </ThemeToggler>
                </Tippy>
            </div>
        </HeaderContainer>
    );
}

const HeaderContainer = styled.div`
  padding: 0 10px;
  margin-right: auto;
  margin-left: auto;
  width: 95%;
  max-width: 1400px;
`

const LogoImage = styled.img`
  height: 54px;
`
export const SiteName = styled.div`
 font-family: Cookie, Arial, Helvetica, sans-serif;
  font-size: 60px;
  line-height: 60px;
  margin-top: 6px;
  margin-left: 10px;
  color: ${props => {
        return props?.theme?.colors?.logo
    }};
`;
export const ThemeToggler = styled.div`
  cursor: pointer;
  padding: 8px;
  display:flex;
  align-items: center;
  justify-content: center;
  border-radius: 25%;
  background-color: ${({ theme }) => {
        return (theme.name === 'Dark') ? '#515863' : '#c9e5ff'
    }} !important;
`;

export const GithubIcon = styled.div`
  cursor: pointer;
  padding: 8px;
  display:flex;
  align-items: center;
  justify-content: center;
  border-radius: 25%;
  background-color: ${({ theme }) => {
        return (theme.name === 'Dark') ? '#515863' : '#c9e5ff'
    }} !important;
`;