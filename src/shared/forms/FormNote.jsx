import Header from "../header/Header";
import Input from "../../components/input/Input";
import { Button, Container, Description, Form, Text } from "./styles";
import { useState } from "react";
import { api } from "../../services/api";
import Loader from "../loading/Loader";
import { useAuth } from "../../context/auth";

export default function FormNote() {
  const [note, setNote] = useState({
    title: "",
    text: "",
  });
  const [loading, setLoading] = useState(false);
  const { setOpenCreate } = useAuth();

  const { token } = JSON.parse(localStorage.getItem("userLogged"));

  function handleCreateNote(e) {
    e.preventDefault();
    setLoading(true);

    const CONFIG = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    console.log(CONFIG);

    api
      .post("/note", { ...note }, CONFIG)
      .then((res) => {
        setOpenCreate(false);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }

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
      <Button onClick={handleCreateNote}>\/</Button>
      {loading ? <Loader /> : <></>}
    </Container>
  );
}
