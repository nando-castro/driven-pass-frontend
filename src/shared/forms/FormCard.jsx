import { useState } from "react";
import Input from "../../components/input/Input";
import { useAuth } from "../../context/auth";
import { api } from "../../services/api";
import Header from "../header/Header";
import Loader from "../loading/Loader";
import { Button, Container, Description, Form, Text } from "./styles";

export default function FormCard() {
  const [isVirtual, setIsVirtual] = useState("");
  const [type, setType] = useState("");
  const [card, setCard] = useState({
    title: "",
    numero: "",
    cardholderName: "",
    password: "",
    securityCode: "",
    expirationDate: "",
    isVirtual: isVirtual,
    type: type,
  });
  const [loading, setLoading] = useState(false);
  const { setOpenCreate } = useAuth();

  const { token } = JSON.parse(localStorage.getItem("userLogged"));

  function handleCreateCard(e) {
    e.preventDefault();
    setLoading(true);

    const CONFIG = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const newData = { ...card, isVirtual, type };

    api
      .post("/card", { ...newData }, CONFIG)
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
    setCard({ ...card, [e.target.name]: e.target.value });
  }

  return (
    <Container>
      <Header text={"Cartão"} />
      <Text>Cadastro</Text>
      <Form>
        <Description>Título</Description>
        <Input
          type={"text"}
          value={card.title}
          name={"title"}
          onChange={changeInput}
        />
        <Description>Número</Description>
        <Input
          type={"numero"}
          value={card.numero}
          name={"numero"}
          onChange={changeInput}
        />
        <Description>Nome no Cartão</Description>
        <Input
          type={"text"}
          value={card.cardholderName}
          name={"cardholderName"}
          onChange={changeInput}
        />
        <Description>Senha</Description>
        <Input
          type={"text"}
          value={card.password}
          name={"password"}
          onChange={changeInput}
        />
        <Description>Código de Segurança</Description>
        <Input
          type={"number"}
          value={card.securityCode}
          name={"securityCode"}
          onChange={changeInput}
        />
        <Description>Data de Validade</Description>
        <Input
          type={"text"}
          value={card.expirationDate}
          name={"expirationDate"}
          onChange={changeInput}
        />
        <Description>O cartão é virtual?</Description>
        <select
          onChange={(e) => {
            e.target.value === "true"
              ? setIsVirtual(true)
              : e.target.value === "false"
              ? setIsVirtual(false)
              : setIsVirtual(null);
          }}
        >
          <option />
          <option value={true}>Sim</option>
          <option value={false}>Não</option>
        </select>
        <Description>Tipo do Cartão</Description>
        <select onChange={(e) => setType(e.target.value)}>
          <option />
          <option value={"credit"}>Crédito</option>
          <option value={"debit"}>Débito</option>
          <option value={"debit_credit"}>Crédito e Débito</option>
        </select>
      </Form>
      <Button onClick={handleCreateCard}>\/</Button>
      {loading ? <Loader /> : <></>}
    </Container>
  );
}
