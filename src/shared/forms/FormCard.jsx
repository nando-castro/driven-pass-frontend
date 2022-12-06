import { useState } from "react";
import Input from "../../components/input/Input";
import Header from "../header/Header";
import { Container, Description, Form, Text } from "./styles";

export default function FormCard() {
  const [isVirtual, setIsVirtual] = useState(null);
  const [cardType, setCardType] = useState("");
  const [card, setCard] = useState({
    title: "",
    number: "",
    cardHolderName: "",
    password: "",
    securityCode: "",
    expirationDate: "",
    isVirtual: isVirtual,
    type: cardType,
  });

  function changeInput(e) {
    setCard({ ...card, [e.target.name]: e.target.value });
  }
  function changeTypeCard(e) {
    setCardType({ ...cardType, [e.target.name]: e.target.value });
  }
  function changeVirtual(e) {
    setIsVirtual({ ...isVirtual, [e.target.name]: e.target.value });
  }

  console.log(card);
  console.log(isVirtual);
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
          type={"number"}
          value={card.number}
          name={"number"}
          onChange={changeInput}
        />
        <Description>Nome no Cartão</Description>
        <Input
          type={"text"}
          value={card.cardHolderName}
          name={"nameHolderName"}
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
        <select onChange={changeVirtual}>
          <option />
          <option value={true}>Sim</option>
          <option value={false}>Não</option>
        </select>
        <Description>Tipo do Cartão</Description>
        <select onChange={changeTypeCard}>
          <option />
          <option value={"credit"}>Crédito</option>
          <option value={"debit"}>Débito</option>
          <option value={"credit_debit"}>Crédito e Débito</option>
        </select>
      </Form>
    </Container>
  );
}
