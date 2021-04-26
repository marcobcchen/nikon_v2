import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 12% 0;
  padding: 0 24px;

  @media (min-width: ${({ theme }) => theme.breakPoint.md}) {
    margin: 4% 0;
    padding: 0;
  }

  a{
    display: flex;
    justify-content: center;
    align-items: center;

    color: #fff;
    font-size: 19px;
    font-weight: 700;
    line-height: 1.36;
    text-align: center;
    width: 100%;
    height: 64px;
    background-color: ${({ theme }) => theme.color.primary};
    border: 2px solid ${({ theme }) => theme.color.primary};
    transition: .3s;

    @media (min-width: ${({ theme }) => theme.breakPoint.md}) {
      width: 320px;
    }

    &:active, &:focus{
      text-decoration: none;
    }

    &:hover{
      color: ${({ theme }) => theme.color.primary};
      text-decoration: none;
      background-color: #fff;
    }
  }
`;

function BasicButton({ text, to, link }) {
  return (
    <StyledButtonContainer>
      {link
        ? <a href={to} target={link} rel="noreferrer">{text}</a>
        : <Link to={to}>{text}</Link>}
    </StyledButtonContainer>
  );
}

export default BasicButton;
