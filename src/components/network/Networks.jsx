import {
  BackHome,
  ButtonDelete,
  Content,
  Footer,
  Icon,
  Item,
  NetworkData,
} from "./styles";
import { BiWifi } from "react-icons/bi";
import { useEffect, useState } from "react";
import { api } from "../../services/api";
import Header from "../../shared/header/Header";
import Loader from "../../shared/loading/Loader";
import Swal from "sweetalert2";
import { useAuth } from "../../context/auth";

export default function Networks() {
  const [networks, setNetworks] = useState([]);
  const [network, setNetwork] = useState({
    id: "",
    title: "",
    name: "",
    password: "",
  });
  const [id, setId] = useState(null);
  const [state, setState] = useState(false);
  const [update, setUpdate] = useState(false);
  const [loading, setLoading] = useState(false);
  const { setSelected } = useAuth();

  const { token } = JSON.parse(localStorage.getItem("userLogged"));

  function getNetworks() {
    setLoading(true);
    const CONFIG = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    api
      .get("/networks", CONFIG)
      .then((res) => {
        setNetworks(res.data);
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
    getNetworks();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [update]);

  function handleChoiceNetwork(id, title, name, password) {
    setNetwork({
      id,
      title,
      name,
      password,
    });
    setId(id);
    setState(true);
  }

  function renderNetworks() {
    return networks.map((i) => (
      <Content
        key={i.id}
        onClick={() => handleChoiceNetwork(i.id, i.title, i.name, i.password)}
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
        .delete(`/network/${id}`, CONFIG)
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
      <Header text={"Wifi"} />
      {state === false ? (
        <Content>
          {networks.length > 0 ? (
            renderNetworks()
          ) : (
            <span>Você não possui redes wifi salvas!</span>
          )}
          <BackHome onClick={() => setSelected(null)}>{"<"} Voltar</BackHome>
        </Content>
      ) : (
        <>
          <NetworkData>
            <h1>{network.title}</h1>
            Name
            <p>{network.name}</p>
            Senha
            <p>{network.password}</p>
          </NetworkData>
          <Footer>
            <BackHome onClick={() => setState(false)}>{"<"} Voltar</BackHome>
            <ButtonDelete onClick={handleDelete}>X</ButtonDelete>
          </Footer>
        </>
      )}
    </>
  );
}
