import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-flow: column;
  flex-basis: 23%;
  margin-right: 25px;

  @media (max-width: 768px) {
    margin-right: 0;
    margin-bottom: 20px;
  }
`;

export const Retweet = styled.img`
  max-width: 100%;
`;

export const Rts = styled.p`
  font-weight: 400;
  font-size: 34px;
  line-height: 25px;
  margin: 0;
  color: #00e7f0;
  margin-top: 15px;
`;
