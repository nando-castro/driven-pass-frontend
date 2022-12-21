import Header from "../header/Header";
import Input from "../../components/input/Input";
import { Button, Container, Description, Form, Text } from "./styles";
import { useState } from "react";
import { api } from "../../services/api";
import Loader from "../loading/Loader";
import { useAuth } from "../../context/auth";
import { FaCheck } from "react-icons/fa";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

export default function FormNote() {
  const [note, setNote] = useState({
    title: "",
    text: "",
  });
  const [loading, setLoading] = useState(false);
  const { setOpenCreate, logout } = useAuth();
  const navigate = useNavigate();

  const { token } = JSON.parse(localStorage.getItem("userLogged"));

  function handleCreateNote(e) {
    e.preventDefault();
    setLoading(true);

    const CONFIG = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    api
      .post("/note", { ...note }, CONFIG)
      .then((res) => {
        setOpenCreate(false);
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Nota cadastrada!",
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
      <Button onClick={handleCreateNote}>
        <FaCheck />
      </Button>
      {loading ? <Loader /> : <></>}
    </Container>
  );
}
