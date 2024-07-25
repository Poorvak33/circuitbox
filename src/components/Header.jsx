// src/components/Header.js
import React from 'react';
import styled from 'styled-components';
import headerImage from '../assets/ev-truck-header.png';

const HeaderContainer = styled.div`
  background-image: url(${headerImage});
  background-size: cover;
  background-position: center;
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.textPrimary};
`;

const HeaderText = styled.h1`
  background-color: rgba(0, 0, 0, 0.5);
  padding: 1rem 2rem;
  border-radius: 8px;
`;

function Header() {
  return (
    <HeaderContainer>
      <HeaderText>EV Truck Diagnostics</HeaderText>
    </HeaderContainer>
  );
}

export default Header;
