import styled from 'styled-components';

export const OverviewWrapper = styled.section`
  display: flex;
  justify-content: center;
  padding: 25px;
  border-top: 4px solid #289bb1;
  width: 90%;
  margin: 50px auto 0;
  background: #2d3965;
  border-radius: 5px;
  box-shadow: 0 2.8px 2.8px rgba(0, 0, 0, 0.022), 0 6.7px 6.7px rgba(0, 0, 0, 0.032), 0 12.5px 12.6px rgba(0, 0, 0, 0.04), 0 22.3px 22.6px rgba(0, 0, 0, 0.048), 0 41.8px 42.2px rgba(0, 0, 0, 0.058), 0 100px 101px rgba(0, 0, 0, 0.08);
`;

export const Avatar = styled.img`
  border-radius: 100%;
  max-width: 150px;
  max-height: 150px;
  border: 3px solid #1a2243;
`;

export const ProfileDetails = styled.div`
  text-align: left;
  margin-left: 30px;

`;

export const Header = styled.h2`
  color: #f7f7f7;
  margin: 0;
`;

export const Fullname = styled.p`
  color: #f7f7f78a;
  margin: 0 0 5px;
  font-size: 15px;
  letter-spacing: 0.5px;
`;

export const Joined = styled.p`
  color: #f7f7f7;
  margin: 0;
`;

export const Followers = styled.p`
  color: #f7f7f7;
  margin: 0;
`;