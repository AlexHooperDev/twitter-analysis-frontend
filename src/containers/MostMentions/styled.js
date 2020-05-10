import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-flow: row;
  flex-wrap: wrap;
  flex-basis: 45%;
  align-content: baseline;
  justify-content: center;
  align-items: center;
`;

export const Copy = styled.a`
  padding: 8px 15px 8px 0;
  margin: 8px 8px;
  background: #41529e;
  color: #f7f7f7;
  font-size: 24px;
  border-radius: 5px;
  flex-basis: unset;
  overflow: hidden;
  text-decoration: none;

  &:hover {
  }

  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

export const Hash = styled.span`
  background: #289bb1;
  padding: 8px 10px;
`;

export const Text = styled.span`
  margin-left: 8px;
`;

export const Count = styled.span`
  font-size: 24px;
  font-weight: 300;
  color: #7ddcefa6;
  margin-left: 10px;

  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

export const Button = styled.button`
  background: #404b71;
  color: #f7f7f7;
  font-size: 12px;
  padding: 5px 15px;
  border-radius: 4px;
  font-weight: 600;
  text-transform: uppercase;
  cursor: pointer;
  margin-top: 14px;
  border: 1px solid #289bb1;
`;
