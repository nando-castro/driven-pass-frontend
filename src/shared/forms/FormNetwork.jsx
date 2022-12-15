import Header from "../header/Header";
import Input from "../../components/input/Input";
import { Button, Container, Description, Form, Text } from "./styles";
import { useState } from "react";
import { api } from "../../services/api";
import Loader from "../loading/Loader";
import { useAuth } from "../../context/auth";

export default function FormNetwork() {
  const [network, setNetwork] = useState({
    title: "",
    name: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const { setOpenCreate } = useAuth();

  const { token } = JSON.parse(localStorage.getItem("userLogged"));

  function handleCreateNetwork(e) {
    e.preventDefault();
    setLoading(true);

    const CONFIG = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    console.log(CONFIG);

    api
      .post("/network", { ...network }, CONFIG)
      .then((res) => {
        setLoading(false);
        setOpenCreate(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }

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
      <Button onClick={handleCreateNetwork}>\/</Button>
      {loading ? <Loader /> : <></>}
    </Container>
  );
}
