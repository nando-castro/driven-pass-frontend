import { useState } from "react";
import Input from "../../components/input/Input";
import { useAuth } from "../../context/auth";
import { api } from "../../services/api";
import Header from "../header/Header";
import Loader from "../loading/Loader";
import { Button, Container, Description, Form, Text } from "./styles";

export default function FormCredential() {
  const [credential, setCredential] = useState({
    title: "",
    url: "",
    userName: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const { setOpenCreate } = useAuth();

  const { token } = JSON.parse(localStorage.getItem("userLogged"));

  function handleCreateCredential(e) {
    e.preventDefault();

    setLoading(true);

    const CONFIG = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    console.log(CONFIG);

    api
      .post("/credential", { ...credential }, CONFIG)
      .then((res) => {
        console.log(res.data);
        setOpenCreate(false);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
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
      <Button onClick={handleCreateCredential}>\/</Button>
      {loading ? <Loader /> : <></>}
    </Container>
  );
}
