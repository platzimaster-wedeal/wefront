import styled from "styled-components";

export const Register = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  border: 1px solid red;
  background: linear-gradient(45deg, #0073b1, #0c8996);
`;

export const Img = styled.img`
  width: 500px;
  position: relative;
  left: -70px;
  bottom: 20px;
`;

export const H1 = styled.h1`
  margin: 0 auto;
  margin-bottom: 20px;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: white;
  border: 1px solid grey;
  border-radius: 6px;
  height: 480px;
  width: 390px;
`;

export const Input = styled.input`
  margin-bottom: 30px;
  margin-left: 18px;
  width: 330px;
  height: 37px;
  border: 1px solid grey;
  border-radius: 5px;
  padding-left: 10px;
`;

export const Label = styled.label`
  margin-left: 18px;
  margin-bottom: 8px;
`;

export const Text = styled.p`
  color: grey;
  font-size: 12px;
  margin: 0 auto;
`;

export const Link = styled.a`
  display: inline;
  color: #0073b1;
`;

export const Button = styled.button`
  width: 200px;
  height: 40px;
  margin: 0 auto;
  margin-top: 15px;
  background-color: #0073b1;
  border: 1px solid #0073b1;
  border-radius: 20px;
  color: white;
  font-weight: bold;
  transition: 0.2s ease-out;
  &:hover {
    background-color: #006097;
  }
`;

export const FooterText = styled.p`
  margin: 0 auto;
  margin-top: 15px;
  margin-bottom: 15px;
`;
