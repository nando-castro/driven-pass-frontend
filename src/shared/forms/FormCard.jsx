import { useState } from "react";
import Input from "../../components/input/Input";
import Header from "../header/Header";
import { Container, Description, Form, Text } from "./styles";

export default function FormCard() {
  const [card, setCard] = useState({
    title: "",
    number: "",
    cardHolderName: "",
    password: "",
    securityCode: "",
    expirationDate: "",
    isVirtual: "",
    type: "",
  });

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
        <Description>Numero</Description>
        <Input
          type={"number"}
          value={card.number}
          name={"number"}
          onChange={changeInput}
        />
        <Description>Nome no Cartao</Description>
        <Input
          type={"text"}
          value={card.cardHolderName}
          name={"nameHolderName"}
          onChange={changeInput}
        />
        <Description>Senha</Description>
        <Input
          type={"password"}
          value={card.password}
          name={"password"}
          onChange={changeInput}
        />
        <Description>Codigo de Seguranca</Description>
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
        <Description>O cartao e virtual?</Description>
        <Input
          type={"text"}
          value={card.expirationDate}
          name={"expirationDate"}
          onChange={changeInput}
        />
        <Description>Tipo do Cartao</Description>
        <Input
          type={"text"}
          value={card.expirationDate}
          name={"expirationDate"}
          onChange={changeInput}
        />
      </Form>
    </Container>
  );
}
