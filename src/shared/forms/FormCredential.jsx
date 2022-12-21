import { useState } from "react";
import Input from "../../components/input/Input";
import { useAuth } from "../../context/auth";
import { api } from "../../services/api";
import Header from "../header/Header";
import Loader from "../loading/Loader";
import { Button, Container, Description, Form, Text } from "./styles";
import { FaCheck } from "react-icons/fa";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

export default function FormCredential() {
  const [credential, setCredential] = useState({
    title: "",
    url: "",
    userName: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const { setOpenCreate, logout } = useAuth();
  const navigate = useNavigate();

  const { token } = JSON.parse(localStorage.getItem("userLogged"));

  function handleCreateCredential(e) {
    e.preventDefault();

    setLoading(true);

    const CONFIG = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    api
      .post("/credential", { ...credential }, CONFIG)
      .then((res) => {
        setOpenCreate(false);
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Credencial cadastrada!",
          showConfirmButton: false,
          timer: 1000,
        });
        setLoading(false);
      })
      .catch((err) => {
        if (err.response.status === 401 || err.response.status === 500) {
          Swal.fire({
            position: "center",
            icon: "error",
            title: "Ops, parece que correu um erro!",
            showConfirmButton: false,
            timer: 5000,
          });
          navigate("/");
          logout();
        }
        if (err.response.status === 409) {
          Swal.fire({
            icon: "error",
            title: "Titulo já existe",
            confirmButtonColor: "#005985",
          });
          setLoading(false);
          return;
        }
        if (err.response.status === 422) {
          Swal.fire({
            icon: "error",
            title: "Preencha os campos corretamente!",
            confirmButtonColor: "#005985",
          });
          setLoading(false);
        }
      });
  }
  function changeInput(e) {
    setCredential({ ...credential, [e.target.name]: e.target.value });
  }
  return (
    <Container>
      <Header text={"Credencial"} />
      <Text>Cadastro</Text>
      <Form>
        <Description>Título</Description>
        <Input
          type={"text"}
          value={credential.title}
          name={"title"}
          onChange={changeInput}
        />
        <Description>URL</Description>
        <Input
          type={"text"}
          value={credential.url}
          name={"url"}
          onChange={changeInput}
        />
        <Description>Usuário</Description>
        <Input
          type={"text"}
          value={credential.userName}
          name={"userName"}
          onChange={changeInput}
        />
        <Description>Senha</Description>
        <Input
          type={"password"}
          value={credential.password}
          name={"password"}
          onChange={changeInput}
        />
      </Form>
      <Button onClick={handleCreateCredential}>
        <FaCheck />
      </Button>
      {loading ? <Loader /> : <></>}
    </Container>
  );
}
