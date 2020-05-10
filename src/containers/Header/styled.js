import styled from 'styled-components';

export const HeaderWrapper = styled.header`
  background: #3b466e;
  box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.02),
    0 6.7px 5.3px rgba(0, 0, 0, 0.028), 0 12.5px 10px rgba(0, 0, 0, 0.035),
    0 22.3px 17.9px rgba(0, 0, 0, 0.042), 0 41.8px 33.4px rgba(0, 0, 0, 0.05),
    0 100px 80px rgba(0, 0, 0, 0.07);
  padding: 25px;
`;

export const TwitterLogo = styled.img`
  max-width: 130px;
`;

export const Text = styled.h1`
  color: #f7f7f7;
  font-weight: 300;
  margin-bottom: 0;

  @media (max-width: 350px) {
    font-size: 24px;
  }
`;

export const Copy = styled.p`
  color: #e0e0e0;
  font-size: 14px;
  max-width: 690px;
  margin: 0 auto;
  font-weight: 400;
  margin-bottom: 20px;
  margin-top: 7px;

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

export const Link = styled.a`
  color: #e0e0e0;
  cursor: pointer;
`;

export const Author = styled.p`
  position: absolute;
  right: 15px;
  top: 15px;
  margin: 0;
  font-size: 13px;
  color: #d3d3d4;
`;
