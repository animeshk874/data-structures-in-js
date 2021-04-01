import classnames from 'classnames';
import styled from "styled-components";
import './list-item.css';

export default function ListItem({ listItem, activeKey }) {
  return (
    <Container
      className={classnames({
        active: activeKey === listItem.key,
      })}
      tabIndex='0'
    >
      <p key={listItem.key}> {listItem.name} </p>
    </Container>
  );
}

const Container = styled.div`
margin: 5px;
background: ${({ theme }) => {
    return theme.colors.background
  }};
padding: 6px 25px;
border-radius: 4px;
box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.07);
cursor: pointer;
transition: transform box-shadow 0.3s ease;
&:hover{
  transform: translateY(-2px);
  box-shadow: 3px 3px 7px rgba(0, 0, 0, 0.06);
}
p {
  padding: 0;
  margin: 0;
  font-size: 14px;
  font-weight: 600;
  color:  ${({ theme }) => {
    return theme.name === 'Dark' ? '#fff' : '#689fd2'
  }};
  text-decoration: none!important;
  text-align: center;
}
&.active{
  background: rgb(55, 148, 234, 0.78);
  p {
    color: #fff;
  }
}
`