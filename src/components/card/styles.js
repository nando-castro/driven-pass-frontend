import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 60px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  cursor: default;

  :hover {
    height: 100px;
    border: 1px solid #000;
  }
`;

export const Content = styled.main`
  width: 100%;
  height: 100%;

  display: flex;

  flex-direction: column;

  span {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const Icon = styled.div`
  width: 25%;

  display: flex;
  align-items: center;
  justify-content: center;

  .icon {
    margin-right: 10px;
    margin-left: 5px;
    font-size: 58px;
    color: #005985;
  }
`;

export const Item = styled.div`
  width: 100%;
  height: 50px;

  display: flex;
  align-items: center;

  font-family: "Recursive";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;

  color: #222222;

  cursor: default;

  :hover {
    background-color: #005985;
    color: #ffffff;

    .icon {
      color: #ffffff;
    }
  }
`;

export const Data = styled.div`
  width: 100%;

  padding-left: 20px;
  padding-right: 20px;

  margin-bottom: 100px;

  font-family: "Recursive";
  font-style: normal;
  font-weight: 700;

  font-size: 20px;
  line-height: 24px;

  color: #222222;

  h1 {
    margin-top: 20px;
    margin-bottom: 30px;
    font-weight: 400;
  }

  p {
    font-weight: 400;
    padding: 10px;
  }
`;

export const Footer = styled.div`
  width: 100%;
  height: 90px;

  position: fixed;
  bottom: 0;
  left: 0;

  background-color: #ffffff;
`;

export const ButtonDelete = styled.div`
  width: 61px;
  height: 61px;

  background-color: #f52424;

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

  cursor: pointer;
`;
