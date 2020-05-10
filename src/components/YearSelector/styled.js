import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  background: #42519f;
  border-radius: 4px;
  margin: 20px 0 0;
`;

export const Arrow = styled.img`
  width: 100%;
  max-width: 20px;
  max-height: 20px;
  padding: 10px;
  transform: rotate(${(props) => (props.prev ? '180' : '0')}deg);

  &:hover {
    cursor: pointer;
  }
`;

export const Year = styled.p`
  margin: 0 5px;
  color: #fff;
  font-size: 14px;
  font-weight: 600;
`;
