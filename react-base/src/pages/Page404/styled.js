import styled from 'styled-components';
import { primaryColor } from '../../config/colors';

export const Title = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  max-width: 400px;

  margin: 30px auto;
  padding: 30px;

  background: #fff;
  border-radius: 4px;

  h1 {
    font-size: 24px;
    color: ${primaryColor};
  }

  small {
    margin-top: 5px;
    font-size: 13px;
  }
`;
