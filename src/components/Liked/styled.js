import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-flow: column;
  flex-basis: 23%;
  margin-right: 25px;

  @media (max-width: 768px) {
    flex-basis: 100%;
    margin-right: 0;
    margin-bottom: 20px;
  }
`;

export const Heart = styled.img`
  max-width: 100%;

  @media (max-width: 768px) {
    max-width: 100px;
    margin: auto;
  }
`;

export const Likes = styled.p`
  font-weight: 400;
  font-size: 34px;
  line-height: 25px;
  margin: 0;
  color: #ff397f;
  margin-top: 15px;
`;
