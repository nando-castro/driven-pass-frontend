import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 90px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  position: fixed;
  top: 0;
  left: 0;

  background-color: #ffffff;
`;

export const Top = styled.div`
  width: 95%;
  height: 60px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-top: 8px;

  .icon {
    font-size: 40px;
    color: #005985;
  }
`;

export const BarBottom = styled.div`
  width: 100%;
  height: 41px;
  padding: 8px 10px;

  background: #005985;
  border: 3px solid #005985;

  font-family: "Recursive";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;

  color: #ffffff;
`;
