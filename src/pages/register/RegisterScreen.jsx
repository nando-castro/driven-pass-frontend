import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { api } from "../../services/api";
import { Button, Container, Form, Header, Logo } from "./styles";
import { BsFillLockFill } from "react-icons/bs";

export default function RegisterScreen() {
  const navigate = useNavigate();
  const [userRegister, setUserregister] = useState({
    email: "",
    password: "",
  });

  function register(e) {
    e.preventDefault();

    api
      .post("/signup", { ...userRegister })
      .then(() => {
        alert("Cadastro realizado com sucesso!");
        navigate("/");
      })
      .catch((res, err) => {
        console.log(err);
      });
  }

  function changeInput(e) {
    setUserregister({ ...userRegister, [e.target.name]: e.target.value });
  }

  return (
    <Container>
      <Header>
        <BsFillLockFill className="icon-lock"></BsFillLockFill>
      </Header>
      <Logo>DrivenPass</Logo>
      <Form>
        <p>Usuário (e-mail)</p>
        <input
          type="email"
          value={userRegister.email}
          name="email"
          onChange={changeInput}
        />
        <p>Senha</p>
        <input
          type="password"
          value={userRegister.password}
          name="password"
          onChange={changeInput}
        />
        <div>
          <Button onClick={register}>Criar</Button>
          <Button className="back">Voltar</Button>
        </div>
      </Form>
    </Container>
  );
}
