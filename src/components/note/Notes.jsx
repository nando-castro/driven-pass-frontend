import {
  BackHome,
  ButtonDelete,
  Content,
  Data,
  Footer,
  Icon,
  Item,
} from "./styles";
import { BiWifi } from "react-icons/bi";
import { useEffect, useState } from "react";
import { api } from "../../services/api";
import Header from "../../shared/header/Header";
import Loader from "../../shared/loading/Loader";
import Swal from "sweetalert2";
import { useAuth } from "../../context/auth";

export default function Notes() {
  const [notes, setNotes] = useState([]);
  const [note, setNote] = useState({
    id: "",
    title: "",
    text: "",
  });
  const [id, setId] = useState(null);
  const [state, setState] = useState(false);
  const [update, setUpdate] = useState(false);
  const [loading, setLoading] = useState(false);
  const { setSelected } = useAuth();

  const { token } = JSON.parse(localStorage.getItem("userLogged"));

  function getNotes() {
    setLoading(true);
    const CONFIG = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    api
      .get("/notes", CONFIG)
      .then((res) => {
        setNotes(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Aguarde! Você será redirecionado para a página principal!",
          showConfirmButton: false,
          timer: 2500,
        });
        setLoading(false);
      });
  }

  useEffect(() => {
    getNotes();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [update]);

  function handleChoiceNote(id, title, text) {
    setNote({
      id,
      title,
      text,
    });
    setId(id);
    setState(true);
  }

  function renderNotes() {
    return notes.map((i) => (
      <Content
        key={i.id}
        onClick={() => handleChoiceNote(i.id, i.title, i.text)}
      >
        <Item>
          <Icon>
            <BiWifi className="icon" />
          </Icon>
          <p>{i.title}</p>
        </Item>
      </Content>
    ));
  }

  function handleDelete(e) {
    e.preventDefault();
    const response = window.confirm(
      "Voce tem certeza que gostaria de apagar o registro?"
    );
    if (response === true) {
      const CONFIG = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      setLoading(true);

      api
        .delete(`/note/${id}`, CONFIG)
        .then((res) => {
          setLoading(false);
          setUpdate(!update);
          setState(false);
        })
        .catch((err) => {
          console.log(err);
          setLoading(false);
        });
    }
  }

  return (
    <>
      {loading ? <Loader /> : <></>}
      <Header text={"Notas"} />
      {state === false ? (
        <Content>
          {notes.length > 0 ? (
            renderNotes()
          ) : (
            <span>Você não possui notas salvas!</span>
          )}
          <BackHome onClick={() => setSelected(null)}>{"<"} Voltar</BackHome>
        </Content>
      ) : (
        <>
          <Data>
            <h1>{note.title}</h1>
            Nota:
            <p>{note.text}</p>
          </Data>
          <Footer>
            <BackHome onClick={() => setState(false)}>{"<"} Voltar</BackHome>
            <ButtonDelete onClick={handleDelete}>X</ButtonDelete>
          </Footer>
        </>
      )}
    </>
  );
}
