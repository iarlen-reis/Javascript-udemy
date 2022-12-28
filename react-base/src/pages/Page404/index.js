import React from 'react';
import { Title } from './styled';
// import history from '../../services/history';

export default function Page404() {
  // history.push('/');
  return (
    <Title>
      <h1>Página não encontrada</h1>
      <small>Por favor, volte para a página inicial</small>
    </Title>
  );
}
