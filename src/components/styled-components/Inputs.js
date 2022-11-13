import styled from 'styled-components';

const StyledInput = styled.input`
  border: 1px solid #1d1e1c;
  border-radius: 108px;
  padding: 10px 16px;
  width: 100%;
  font-family: 'JetBrains Mono';
  margin-top: 8px;

  &::placeholder {
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 21px;

    color: #1d1e1c;

    opacity: 0.5;
  }
`;

export const RoundedInput = ({ placeholder, value, onChange }) => {
  return (
    <StyledInput placeholder={placeholder} value={value} onChange={onChange} />
  );
};
