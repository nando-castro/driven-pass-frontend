import { useState } from "react";
import Input from "../../components/input/Input";
import { useAuth } from "../../context/auth";
import { api } from "../../services/api";
import Header from "../header/Header";
import Loader from "../loading/Loader";
import { Button, Container, Description, Form, Text } from "./styles";
import Swal from "sweetalert2";
import { FaCheck } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

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
  const { setOpenCreate, logout } = useAuth();
  const navigate = useNavigate();

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
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Cartão cadastrado!",
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
      <Button onClick={handleCreateCard}>
        <FaCheck />
      </Button>
      {loading ? <Loader /> : <></>}
    </Container>
  );
}
