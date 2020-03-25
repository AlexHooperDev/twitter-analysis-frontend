import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-flow: row;
  flex-wrap: wrap;
  flex-basis: 45%;
  align-content: baseline;
  justify-content: center;
  align-items: center;
`;

export const Copy = styled.p`
  padding: 8px 15px 8px 0;
  margin: 8px 8px;
  background: #41529e;
  color: #f7f7f7;
  font-size: 24px;
  border-radius: 5px;
  flex-basis: unset;
  overflow: hidden;
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
`;
