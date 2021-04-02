import styled from 'styled-components'
import { Fragment } from 'react';

const data = [{
  id: 0,
  userId: '@surya76657',
  githubLink: 'https://github.com/surya76657'
}, {
  id: 1,
  userId: '@vikaskumr',
  githubLink: 'https://github.com/vikaskumr'
}, {
  id: 2,
  userId: '@animeshk874',
  githubLink: 'https://github.com/animeshk874'
}]
export default function Footer() {
  return (
    <FooterWrapper >
      <LayoutContent >
        Made with &nbsp;
        <SVG
          viewBox='0 0 24 24'
          aria-hidden='true'
          focusable='false'
          xmlns='http://www.w3.org/2000/svg'
          fill="rgb(255, 85, 85)"
        >
          <path fill='none' d='M0 0h24v24H0z'></path>
          <path d='M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z'></path>
        </SVG>
        &nbsp; by &nbsp;
        {data.map((d, index) => (
          <Fragment key={`${d.id}`}>
            <ProfileLink
              href={d.githubLink}
              target='_blank'
              rel="noopener noreferrer"
            >
              {d.userId}
            </ProfileLink>
            {index === data.length - 2 ? ' and ' : index < data.length - 1 ? ' , ' : ' . '}
          </Fragment>
        ))}
      </LayoutContent>
    </FooterWrapper>
  );
}

const SVG = styled.svg`
  display: inline-block;
  width: 24px;
  color: rgb(255, 85, 85);
  transform: translateY(-10%);
`

const FooterWrapper = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  /* background-color: ${({ theme }) => {
    return (theme.name === 'Dark') ? 'rgb(40, 42, 54)' : 'rgb(239, 239, 239)'
  }} ; */
  color:  ${({ theme }) => {
    return (theme.name === 'Dark') ? '#ddd' : '#999'
  }} ;
  box-sizing: border-box;
  margin-top: 30px;
  margin-right: auto;
  margin-left: auto;
  width: 95%;
  max-width: 1400px;
`

const LayoutContent = styled.div`
  text-align: center;
  box-sizing: border-box;
  margin-bottom: 30px;
`

const ProfileLink = styled.a`
  color: #21a1e1;
  text-decoration: none;
  &:hover {
    color: #21a1e1;
  }
`