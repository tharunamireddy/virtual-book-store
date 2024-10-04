import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavbarStyled = styled.nav`
  background-color: #34495e;
  padding: 10px 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.h1`
  font-size: 1.8rem;
  color: #ecf0f1;
  font-weight: bold;
  cursor: pointer;
`;

const NavLinks = styled.div`
  display: flex;
`;

const NavLink = styled(Link)`
  font-size: 1.2rem;
  color: #ecf0f1;
  text-decoration: none;
  margin-left: 20px;
  transition: color 0.3s ease-in-out;

  &:hover {
    color: #3498db;
  }
`;

const Navbar = ({ libraryCount }) => {
  return (
    <NavbarStyled>
      <Logo>Virtual Library</Logo>
      <NavLinks>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/mylibrary">My Library ({libraryCount})</NavLink>
      </NavLinks>
    </NavbarStyled>
  );
};

export default Navbar;
