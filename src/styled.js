import styled from 'styled-components';

export const Wrapper = styled.main`
  display: flex;
  opacity: ${(props) => (props.mounted ? '1' : '0')};
  transform: translate3d(0, ${(props) => (props.mounted ? '0px' : '-50px')}, 0);
  transition: all 0.4s;
  flex-flow: column;
  padding: 45px 40px;
  border-top: 3px solid #289bb1;
  width: 90%;
  max-width: 1200px;
  margin: 50px auto 0;
  background: #2d396552;
  border-radius: 5px;
  box-shadow: 0 2.8px 2.8px rgba(0, 0, 0, 0.022),
    0 6.7px 6.7px rgba(0, 0, 0, 0.032), 0 12.5px 12.6px rgba(0, 0, 0, 0.04),
    0 22.3px 22.6px rgba(0, 0, 0, 0.048), 0 41.8px 42.2px rgba(0, 0, 0, 0.058),
    0 100px 101px rgba(0, 0, 0, 0.08);
  box-sizing: border-box;

  @media (max-width: 768px) {
    padding: 15px 20px;
    width: 95%;
    margin-top: 30px;
  }
`;

export const TwoColRow = styled.section`
  display: flex;
  padding: 40px 0;
  border-bottom: 1px solid #475179;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-flow: column;

    & > div:first-child {
      padding-bottom: 60px;
      margin-bottom: 40px;
      border-bottom: 1px solid #475179;
    }
  }
`;

export const OneColRow = styled.section`
  display: flex;
  padding: 30px 0;
  border-bottom: 1px solid #475179;
`;
