import { useState } from "react";
import { Container, Content } from "./styles";

import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

export default function Input({
  type,
  disabled,
  placeholder,
  value,
  name,
  onChange,
}) {
  const [hidden, setHidden] = useState(true);
  function hiddenPassword(e) {
    e.preventDefault();
    setHidden(!hidden);
  }
  return (
    <>
      {type === "password" ? (
        <Container>
          <Content
            disabled={disabled}
            type={hidden === true ? "password" : "text"}
            placeholder={placeholder}
            value={value}
            name={name}
            onChange={onChange}
          />
          {hidden === true ? (
            <AiFillEye className="icon" onClick={hiddenPassword} />
          ) : (
            <AiFillEyeInvisible className="icon" onClick={hiddenPassword} />
          )}
        </Container>
      ) : (
        <Container>
          <Content
            disabled={disabled}
            type={type}
            placeholder={placeholder}
            value={value}
            name={name}
            onChange={onChange}
          />
        </Container>
      )}
    </>
  );
}
