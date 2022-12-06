import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  .icon {
    font-size: 25px;
    position: fixed;
    margin-left: -38px;
    margin-top: 7px;

    cursor: pointer;
  }
`;
export const Content = styled.input`
  width: 100%;
  height: 40px;

  background: #ffffff;
  border: 3px solid #005985;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  padding: 15px;
  margin-bottom: 15px;

  &[type="number"]::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
  &[type="number"] {
    -moz-appearance: textfield;
    appearance: textfield;
  }
`;
