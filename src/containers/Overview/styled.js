import styled from 'styled-components';

export const OverviewWrapper = styled.section`
  display: flex;
  padding: 0 0 40px;
  border-bottom: 1px solid #475179;
  height: fit-content;
  justify-content: center;

  @media (max-width: 768px) {
    flex-flow: column;
    align-items: center
  }

`;

export const Avatar = styled.img`
  border-radius: 100%;
  max-width: 150px;
  max-height: 150px;
  width: 100%;
  height: 100%;
  border: 2px solid #1a2243;
`;

export const ProfileDetails = styled.div`
  text-align: left;
  margin-left: 30px;

  @media (max-width: 768px) {
    text-align: center;
    margin: 15px 0;
  }

`;

export const Header = styled.h2`
  color: #f7f7f7;
  margin: 0 0 7px;
`;

export const Fullname = styled.p`
  color: #f7f7f78a;
  margin: 0 0 15px;
  font-size: 15px;
  letter-spacing: 0.5px;
`;

export const Joined = styled.p`
  color: #f7f7f7;
  margin: 0;
`;

export const Followers = styled.p`
  color: #f7f7f78a;
  margin: 0;

  & :nth-child(2) {
    margin-left: 25px;
  }

`;

export const Bio = styled.p`
  color: #d3d4da;
  font-size: 14px;
  margin: 18px 0 0;
`;

export const Number = styled.span`
margin-right: 3px;
font-size: 18px;
font-weight: 700;
color: #f7f7f7;

`;