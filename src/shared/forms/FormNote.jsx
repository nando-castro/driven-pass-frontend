import Header from "../header/Header";
import Input from "../../components/input/Input";
import { Container, Description, Form, Text } from "./styles";
import { useState } from "react";

export default function FormNote() {
  const [note, setNote] = useState({
    title: "",
    text: "",
  });

  function changeInput(e) {
    setNote({ ...note, [e.target.name]: e.target.value });
  }
  return (
    <Container>
      <Header text={"Notas"} />
      <Text>Cadastro</Text>
      <Form>
        <Description>Título</Description>
        <Input
          type={"text"}
          value={note.title}
          name={"title"}
          onChange={changeInput}
        />
        <Description>Texto</Description>
        <Input
          type={"text"}
          value={note.text}
          name={"text"}
          onChange={changeInput}
        />
      </Form>
    </Container>
  );
}
