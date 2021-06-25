import classnames from 'classnames';
import React from 'react';
import styled from "styled-components";

 const ListItem: React.FC<any> = ({ listItem, activeKey }) => {
  return (
    <Container
      className={classnames({
        active: activeKey === listItem.key,
      })}
      tabIndex='0'
    >
      <p> {listItem.name} </p>
    </Container>
  );
}
export default ListItem;

const Container :any= styled.div`
  margin: 5px;
  background: ${({ theme }) => theme.colors.background};
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
    color:  ${({ theme }) => theme.name === 'Dark' ? '#fff' : '#689fd2'};
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