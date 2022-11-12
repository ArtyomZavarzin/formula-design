import styled from 'styled-components';
import { ReactComponent as Logo } from '../assets/icons/logo-header.svg';

const StyledHeader = styled.div`
  background-color: #d9d9d9;
  padding-top: 60px;
  padding-left: 32px;
  padding-right: 32px;
  padding-bottom: 16px;
  text-align: center;
  & svg {
    width: 100%;
    height: auto;
    max-width: 400px;
  }
`;

export const Header = () => {
  return (
    <StyledHeader>
      <Logo />
    </StyledHeader>
  );
};
