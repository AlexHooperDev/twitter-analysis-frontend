import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  margin: 0 auto;
  max-width: 700px;
  width: 100%;
  justify-content: center;
  align-items: stretch;
  border-radius: 4px;
  overflow: hidden;
  box-shadow:
  0 0.5px 1.2px rgba(0, 0, 0, 0.02),
  0 1.3px 2.9px rgba(0, 0, 0, 0.028),
  0 2.4px 5.5px rgba(0, 0, 0, 0.035),
  0 4.2px 9.8px rgba(0, 0, 0, 0.042),
  0 7.9px 18.4px rgba(0, 0, 0, 0.05),
  0 19px 44px rgba(0, 0, 0, 0.07)
;
`;

export const Input = styled.input`
border: none;
background: #778EDB;
font-size: 16px;
font-weight: 500;
color: #f7f7f7;
padding: 9px 16px;
width: 80%;

  @media (max-width: 768px) {
    width: 60%;
  }

`;

export const Button = styled.button`
  width: 15%;
  background: #4A5DB3;
  color: #f7f7f7;
  border: none;
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 0.5px;
  cursor: pointer;
  transition: background-color 0.4s;

  @media (max-width: 768px) {
    width: 30%;
  }

`;

export const At = styled.span`
  width: 5%;
  background: #289BB1;
  padding: 10px 0;
  font-weight: 900;
  color: #f7f7f7;

  @media (max-width: 768px) {
    width: 10%;
  }

`;

export const FormError = styled.div`
  max-width: 700px;
  margin: 0 auto;
  background: #d24141cc;
  color: #f7f7f7;
  padding: 10px;
  box-sizing: border-box;
  padding-top: 15px;
  margin-top: -5px;
  border-radius: 4px;
  font-weight: 500;
`;