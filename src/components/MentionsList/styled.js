import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  position: relative;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  max-height: ${(props) => (props.expanded ? 'auto' : '134px')};
  overflow: hidden;

  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 15px;
    background: linear-gradient(rgba(37, 46, 84, 0) 0%, rgb(37, 47, 84) 100%);
  }
`;
