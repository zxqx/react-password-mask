import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
`;

const Input = styled.input`
  width: 100%;
  ${props => props.inputStyles}
`;

export const PasswordInput = styled(Input)`
  display: ${props => !props.passwordShown ? 'block' : 'none'};
`;

export const TextInput = styled(Input)`
  display: ${props => props.passwordShown ? 'block' : 'none'};
`;

export const Button = styled.a`
  position: absolute;
  top: 50%;
  right: 6px;
  margin-top: -13px;
  padding: 4px 10px;
  background: #e2e2e2;
  border-radius: 2px;
  color: #000;
  text-align: center;
  text-decoration: none;
  user-select: none;
  ${props => props.buttonStyles}
`;
