import React from 'react';
import { FaHome, FaSignInAlt, FaUserAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Nav } from '../styled';

export default function Header() {
  // eslint-disable-next-line no-unused-vars
  const botaoClicado = useSelector(
    state => state.example.botaoClicado
  );
  return (
    <Nav>
      <Link to="/">
        <FaHome size={24} />
      </Link>
      <Link to="/login">
        <FaUserAlt size={24} />
      </Link>
      <Link to="/wdasdasdd">
        <FaSignInAlt size={24} />
        {botaoClicado
          ? 'Botão clicado!'
          : 'Botão não foi clicado =('}
      </Link>
    </Nav>
  );
}
