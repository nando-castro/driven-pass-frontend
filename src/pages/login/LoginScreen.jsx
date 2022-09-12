import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/auth";
import { useState } from "react";
import { api } from "../../services/api";
import { Button, Container, Form, Header, Logo, Redirect } from "./styles";
import { BsFillLockFill } from "react-icons/bs";
import Swal from "sweetalert2";

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
        const person = {
          token: res.data.token,
        };
        localStorage.setItem("userLogged", JSON.stringify(person));
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Aguarde! Você será redirecionado para a página principal!",
          showConfirmButton: false,
          timer: 2500,
        });
        navigate("/home");
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: "Login inválido!",
          text: "Confira o seu nome de usuário e senha para validar o seu acesso.",
          confirmButtonColor: "#9BFBB0",
        });
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
      <Button className="button-login" onClick={login}>
        Acessar
      </Button>
      <Redirect>
        <main></main>
        <Link to="/signup">Primeiro acesso? Crie sua conta!</Link>
      </Redirect>
    </Container>
  );
}
