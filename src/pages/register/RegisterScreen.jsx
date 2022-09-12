import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { api } from "../../services/api";
import { Button, Container, Form, Header, Logo } from "./styles";
import { BsFillLockFill } from "react-icons/bs";
import Swal from "sweetalert2";

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
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Cadastro realizado com sucesso!",
          showConfirmButton: false,
          timer: 1000,
        });
        navigate("/");
      })
      .catch((err) => {
        if (err.response.status === 409) {
          Swal.fire({
            icon: "error",
            title: "Usuário já existe",
            confirmButtonColor: "#9BFBB0",
          });
          return;
        }
        Swal.fire({
          icon: "error",
          title: "Preencha os campos corretamente!",
          confirmButtonColor: "#9BFBB0",
        });
      });
  }

  function changeInput(e) {
    setUserregister({ ...userRegister, [e.target.name]: e.target.value });
  }

  function back() {
    navigate("/");
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
          <Button className="back" onClick={back}>
            Voltar
          </Button>
        </div>
      </Form>
    </Container>
  );
}
