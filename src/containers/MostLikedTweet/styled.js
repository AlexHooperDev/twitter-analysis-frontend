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

export const Tweet = styled.a`
  flex-basis: 65%;
  text-align: left;
  color: #f7f7f7;
  font-size: 14px;
  line-height: 23px;
  margin: 10px 0 0 0;

  text-decoration: none;

  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }

  @media (max-width: 768px) {
    flex-basis: 100%;
    text-align: center;
  }
`;
