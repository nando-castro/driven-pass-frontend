import { useState } from "react";
import Input from "../../components/input/Input";
import { api } from "../../services/api";
import Header from "../header/Header";
import { Button, Container, Description, Form, Text } from "./styles";

export default function FormCredential() {
  const [credential, setCredential] = useState({
    title: "",
    url: "",
    userName: "",
    password: "",
  });

  const { token } = JSON.parse(localStorage.getItem("userLogged"));

  function handleCreateCredential(e) {
    e.preventDefault();

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
      })
      .catch((err) => {
        console.log(err);
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
    </Container>
  );
}
