// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
  background-color: #fff;
  padding: 1rem 2rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const NavList = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NavItem = styled.li`
  margin: 0 1rem;
`;

const NavLink = styled(Link)`
  font-weight: 500;
  color: #333;
  &:hover {
    color: #007bff;
  }
`;

function Navbar() {
  return (
    <Nav>
      <NavList>
        <NavItem><NavLink to="/">Home</NavLink></NavItem>
        <NavItem><NavLink to="/case-evaluator">Case Evaluator</NavLink></NavItem>
        <NavItem><NavLink to="/dtc-discussion-board">DTC Discussion Board</NavLink></NavItem>
        <NavItem><NavLink to="/login">Login</NavLink></NavItem>
        <NavItem><NavLink to="/sign-up">Sign Up</NavLink></NavItem>
      </NavList>
    </Nav>
  );
}

export default Navbar;


