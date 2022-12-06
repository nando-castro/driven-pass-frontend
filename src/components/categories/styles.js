import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
`;

export const Item = styled.div`
  width: 100%;
  height: 60px;

  display: flex;
  align-items: center;
  justify-content: space-between;
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

export const Text = styled.p`
  width: 100%;

  font-family: "Recursive";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;

  color: #222222;
`;
