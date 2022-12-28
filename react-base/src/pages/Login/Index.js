import React from 'react';
import { useDispatch } from 'react-redux';
import { Title, Paragrafo } from './styled';
import { Container } from '../../styles/GlobalStyles';
import * as exampleActions from '../../store/modules/example/actions';

export default function Login() {
  const disparador = useDispatch();
  function handleClick(event) {
    event.preventDefault();

    disparador(exampleActions.clicaBotaoRequest());
  }

  return (
    <Container>
      <Title isRed={false}>
        Login
        <small>Oie</small>
      </Title>
      <Paragrafo>lorem lorem</Paragrafo>
      <button type="submit" onClick={handleClick}>
        Enviar
      </button>
    </Container>
  );
}
