import styled from 'styled-components';
import Tippy from '@tippyjs/react';
import { useTheme } from '../../../context/ThemeContext'

import 'tippy.js/dist/tippy.css';


export default function Header() {
    const { selectMode, selectedTheme } = useTheme();

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
                <Tippy
                    content="Download the Dryice Chrome Extension"
                    touch={false}
                >
                    <SVGWrapper as="a" href="https://chrome.google.com/webstore/detail/dryice/nnmdkginmhadcfifcaflfkidllcemhmb?hl=en-GB&authuser=0" target="_blank" className="m-2 d-none d-md-flex">
                        <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                            viewBox="-70 -50 550 550" enableBackground="new 0 0 20 20" height="20px" width="20px">
                        <g>
                            <g>
                                <path d="M394.667,213.333h-32V128c0-23.573-19.093-42.667-42.667-42.667h-85.333v-32C234.667,23.893,210.773,0,181.333,0
                                    S128,23.893,128,53.333v32H42.667c-23.573,0-42.453,19.093-42.453,42.667l-0.107,81.067H32c31.787,0,57.6,25.813,57.6,57.6
                                    s-25.813,57.6-57.6,57.6H0.107L0,405.333C0,428.907,19.093,448,42.667,448h81.067v-32c0-31.787,25.813-57.6,57.6-57.6
                                    s57.6,25.813,57.6,57.6v32H320c23.573,0,42.667-19.093,42.667-42.667V320h32c29.44,0,53.333-23.893,53.333-53.333
                                    S424.107,213.333,394.667,213.333z"
                                    fill={(selectedTheme?.name === 'Dark') ? "#c2c6ca" : "#525860"}
                                    />
                            </g>
                        </g>
                        </svg>
                    </SVGWrapper>
                </Tippy>
                <Tippy content="Watch our Youtube tutorial" touch={false}>
                    <SVGWrapper as="a" href="https://www.youtube.com/watch?v=ZhIFuPt70dY&lc=UgwRBrL0UG3cahD7AXl4AaABAg" target="_blank">
                        <svg
                            viewBox="0 -77 512.00213 512"
                            height="20px"
                            width="20px"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="m501.453125 56.09375c-5.902344-21.933594-23.195313-39.222656-45.125-45.128906-40.066406-10.964844-200.332031-10.964844-200.332031-10.964844s-160.261719 0-200.328125 10.546875c-21.507813 5.902344-39.222657 23.617187-45.125 45.546875-10.542969 40.0625-10.542969 123.148438-10.542969 123.148438s0 83.503906 10.542969 123.148437c5.90625 21.929687 23.195312 39.222656 45.128906 45.128906 40.484375 10.964844 200.328125 10.964844 200.328125 10.964844s160.261719 0 200.328125-10.546875c21.933594-5.902344 39.222656-23.195312 45.128906-45.125 10.542969-40.066406 10.542969-123.148438 10.542969-123.148438s.421875-83.507812-10.546875-123.570312zm0 0"
                                fill="#f00"
                            />
                            <path
                                d="m204.96875 256 133.269531-76.757812-133.269531-76.757813zm0 0"
                                fill="#fff"
                            />
                        </svg>
                    </SVGWrapper>
                </Tippy>
                <Tippy content="Github" touch={false}>
                    <SVGWrapper className="github-icon m-2" as='a' href='https://github.com/animeshk874/data-structures-in-js' target='_blank'>
                        <svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 20 20" height="20px" id="Layer_1" version="1.1" viewBox="0 0 512 512" width="20px">
                            <g>
                                <path
                                    clipRule="evenodd"
                                    d="M296.133,354.174c49.885-5.891,102.942-24.029,102.942-110.192 c0-24.49-8.624-44.448-22.67-59.869c2.266-5.89,9.515-28.114-2.734-58.947c0,0-18.139-5.898-60.759,22.669   c-18.139-4.983-38.09-8.163-56.682-8.163c-19.053,0-39.011,3.18-56.697,8.163c-43.082-28.567-61.22-22.669-61.22-22.669   c-12.241,30.833-4.983,53.057-2.718,58.947c-14.061,15.42-22.677,35.379-22.677,59.869c0,86.163,53.057,104.301,102.942,110.192   c-6.344,5.452-12.241,15.873-14.507,30.387c-12.702,5.438-45.808,15.873-65.758-18.592c0,0-11.795-21.31-34.012-22.669   c0,0-22.224-0.453-1.813,13.592c0,0,14.96,6.812,24.943,32.653c0,0,13.6,43.089,76.179,29.48v38.543   c0,5.906-4.53,12.702-15.865,10.89C96.139,438.977,32.2,354.626,32.2,255.77c0-123.807,100.216-224.022,224.03-224.022   c123.347,0,224.023,100.216,223.57,224.022c0,98.856-63.946,182.754-152.828,212.688c-11.342,2.266-15.873-4.53-15.873-10.89   V395.45C311.1,374.577,304.288,360.985,296.133,354.174L296.133,354.174z M512,256.23C512,114.73,397.263,0,256.23,0   C114.73,0,0,114.73,0,256.23C0,397.263,114.73,512,256.23,512C397.263,512,512,397.263,512,256.23L512,256.23z"
                                    fill={(selectedTheme?.name === 'Dark') ? "#c2c6ca" : "#525860"}
                                    fillRule="evenodd"
                                >
                                </path>
                            </g>
                        </svg>
                    </SVGWrapper>
                </Tippy>

                <Tippy
                    content={(selectedTheme?.name === 'Dark') ? "Switch to Light Mode" : "Switch to Dark Mode"}
                    touch={false}
                >
                    <SVGWrapper onClick={handleChange}>
                        {(selectedTheme?.name === 'Dark') ?
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                viewBox="0 0 20 20"
                                fill="#c2c6ca"
                            >
                                <path d="M8,2 C4.5,2.9 2,6.1 2,9.9 C2,14.4 5.6,18 10.1,18 C13.9,18 17,15.5 18,12 C11.9,13.7 6.3,8.1 8,2 Z"></path>
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
                    </SVGWrapper>
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
export const SVGWrapper = styled.div`
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
