import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/auth";
import { useState } from "react";
import { api } from "../../services/api";
import { Button, Container, Form, Header, Logo, Redirect } from "./styles";
import { BsFillLockFill } from "react-icons/bs";

export default function LoginScreen() {
  const navigate = useNavigate();
  const { user, setUser } = useAuth();

  if (user !== null) {
    navigate("/home");
  }

  const [userLogin, setUserLogin] = useState({
    email: "",
    password: "",
  });

  function login(e) {
    e.preventDefault();

    api
      .post("signin", { ...userLogin })
      .then((res) => {
        setUser(res.data);
        navigate("/home");

        const person = {
          token: res.data.token,
        };
        localStorage.setItem("userLogged", JSON.stringify(person));
      })
      .catch((err) => {
        console.log("email ou senha inválidos");
      });
  }
  function changeInput(e) {
    setUserLogin({ ...userLogin, [e.target.name]: e.target.value });
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
          value={userLogin.email}
          name="email"
          onChange={changeInput}
        />
        <p>Senha</p>
        <input
          type="password"
          value={userLogin.password}
          name="password"
          onChange={changeInput}
        />
      </Form>
      <Button onClick={login}>Acessar</Button>
      <Redirect>
        <main></main>
        <Link to="/signup">Primeiro acesso? Crie sua conta!</Link>
      </Redirect>
    </Container>
  );
}
