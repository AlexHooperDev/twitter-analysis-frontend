import styled from 'styled-components';

export const Wrapper = styled.a`
  padding: 9px 15px;
  margin: 8px 8px;
  background: #41529e;
  color: #f7f7f7;
  font-size: 14px;
  border-radius: 5px;
  text-decoration: none;

  &:hover {
    cursor: pointer;
  }

  @media (max-width: 768px) {
    padding: 7px 11px;
    margin: 6px;
    font-size: 12px;
  }
`;

export const WordSpan = styled.span`
  font-weight: 500;
`;

export const CountSpan = styled.span`
  margin-left: 5px;
  font-size: 12px;
  font-weight: 300;
  color: #97eeff;
`;
