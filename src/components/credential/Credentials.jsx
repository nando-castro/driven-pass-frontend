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
import { MdDelete } from "react-icons/md";

export default function Credentials() {
  const [credentials, setCredentials] = useState([]);
  const [credential, setCredential] = useState({
    id: "",
    title: "",
    url: "",
    userName: "",
    password: "",
  });
  const [id, setId] = useState(null);
  const [state, setState] = useState(false);
  const [update, setUpdate] = useState(false);
  const [loading, setLoading] = useState(false);
  const { setSelected } = useAuth();

  const { token } = JSON.parse(localStorage.getItem("userLogged"));

  function getCredentials() {
    setLoading(true);
    const CONFIG = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    api
      .get("/credentials", CONFIG)
      .then((res) => {
        setCredentials(res.data);
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
    getCredentials();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [update]);

  function handleChoiceCredential(id, title, url, userName, password) {
    setCredential({
      id,
      title,
      url,
      userName,
      password,
    });
    setId(id);
    setState(true);
  }

  function renderCrendentials() {
    return credentials.map((i) => (
      <Content
        key={i.id}
        onClick={() =>
          handleChoiceCredential(i.id, i.title, i.url, i.userName, i.password)
        }
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
        .delete(`/credential/${id}`, CONFIG)
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
      <Header text={"Credenciais"} />
      {state === false ? (
        <Content>
          {credentials.length > 0 ? (
            renderCrendentials()
          ) : (
            <span>Você não possui credenciais salvas!</span>
          )}
          <BackHome onClick={() => setSelected(null)}>{"<"} Voltar</BackHome>
        </Content>
      ) : (
        <>
          <Data>
            <h1>{credential.title}</h1>
            URL:
            <p>{credential.url}</p>
            Nome de Usuario:
            <p>{credential.userName}</p>
            Senha:
            <p>{credential.password}</p>
          </Data>
          <Footer>
            <BackHome onClick={() => setState(false)}>{"<"} Voltar</BackHome>
            <ButtonDelete onClick={handleDelete}>
              <MdDelete />
            </ButtonDelete>
          </Footer>
        </>
      )}
    </>
  );
}
