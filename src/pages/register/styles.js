import styled from "styled-components";

export const Container = styled.div`
  max-width: 375px;
  max-width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;

  div {
    margin-top: 15px;
  }

  div .back {
    background-color: #fb9b9b;
    border: 3px solid #fb9b9b;
  }
`;

export const Header = styled.div`
  width: 100%;
  height: 20%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .icon-lock {
    font-size: 100px;
    color: #005985;
  }
`;

export const Logo = styled.div`
  width: 100%;
  height: 5%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  font-family: "Righteous";
  font-style: normal;
  font-weight: 400;
  font-size: 36px;
  line-height: 45px;
  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: -0.012em;

  color: #005985;
`;

export const Form = styled.form`
  width: 100%;
  height: auto;
  margin-top: 20px;
  padding: 30px 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  input {
    width: 250px;
    height: 40px;
    margin-bottom: 20px;

    background: #ffffff;
    border: 3px solid #005985;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
  }
  p {
    margin-bottom: 10px;
    font-family: "Recursive";
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;

    text-align: center;

    color: #000000;
  }
`;
export const Button = styled.div`
  width: 250px;
  height: 40px;
  margin-bottom: 16px;
  background-color: #9bfbb0;
  border: 3px solid #9bfbb0;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  border-radius: 5px;

  display: flex;
  align-items: center;
  justify-content: center;

  font-family: "Recursive";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;

  color: #000000;

  .icon-arrow {
    font-size: 20px;
    margin-right: 5px;
  }
`;
