import Header from "../header/Header";
import Input from "../../components/input/Input";
import { Container, Description, Form, Text } from "./styles";
import { useState } from "react";

export default function FormNetwork() {
  const [network, setNetwork] = useState({
    title: "",
    name: "",
    password: "",
  });

  function changeInput(e) {
    setNetwork({ ...network, [e.target.name]: e.target.value });
  }
  return (
    <Container>
      <Header text={"Wifi"} />
      <Text>Cadastro</Text>
      <Form>
        <Description>Título</Description>
        <Input
          type={"text"}
          value={network.title}
          name={"title"}
          onChange={changeInput}
        />
        <Description>Nome</Description>
        <Input
          type={"text"}
          value={network.name}
          name={"name"}
          onChange={changeInput}
        />
        <Description>Senha</Description>
        <Input
          type={"password"}
          value={network.password}
          name={"password"}
          onChange={changeInput}
        />
      </Form>
    </Container>
  );
}
