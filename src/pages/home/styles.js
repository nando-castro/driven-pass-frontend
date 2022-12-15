import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  margin-top: 120px;
`;

export const Footer = styled.div`
  width: 100%;
  height: 90px;

  position: fixed;
  bottom: 0;
  left: 0;

  background-color: #ffffff;
`;

export const ButtonAdd = styled.div`
  width: 61px;
  height: 61px;

  background-color: #005985;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 50px;

  position: fixed;
  right: 10px;
  bottom: 16px;

  color: #ffffff;
  font-size: 45px;
  font-weight: bold;

  cursor: pointer;
`;

export const BackHome = styled.p`
  width: 90px;
  height: 61px;

  display: flex;
  align-items: center;
  justify-content: center;

  position: fixed;
  left: 10px;
  bottom: 16px;

  font-family: "Recursive";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;

  text-align: center;
  text-decoration-line: underline;

  color: #000000;
`;
