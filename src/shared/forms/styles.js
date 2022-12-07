import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;

  margin-bottom: 80px;
`;
export const Form = styled.form`
  width: 100%;
  height: 100%;

  padding: 15px;

  select {
    width: 100%;
    height: 40px;

    margin-bottom: 12px;

    font-family: "Recursive";
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 24px;
  }
`;

export const Text = styled.h3`
  width: 100%;
  height: 40px;

  padding: 10px;

  font-family: "Recursive";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;

  color: #222222;
`;

export const Description = styled.p`
  width: 100%;

  font-family: "Recursive";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;

  color: #222222;
`;

export const Button = styled.div`
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

  z-index: 2;
`;
