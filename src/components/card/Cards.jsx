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

export default function Cards() {
  const [cards, setCards] = useState([]);
  const [card, setCard] = useState({
    id: "",
    title: "",
    numero: "",
    cardholderName: "",
    password: "",
    securityCode: "",
    expirationDate: "",
    isVirtual: "",
    type: "",
  });
  const [id, setId] = useState(null);
  const [state, setState] = useState(false);
  const [update, setUpdate] = useState(false);
  const [loading, setLoading] = useState(false);
  const { setSelected } = useAuth();
  const { token } = JSON.parse(localStorage.getItem("userLogged"));

  function getCards() {
    setLoading(true);
    const CONFIG = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    api
      .get("/cards", CONFIG)
      .then((res) => {
        setCards(res.data);
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
    getCards();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [update]);

  function handleChoiceCard(
    id,
    title,
    numero,
    cardholderName,
    password,
    securityCode,
    expirationDate,
    isVirtual,
    type
  ) {
    setCard({
      id,
      title,
      numero,
      cardholderName,
      password,
      securityCode,
      expirationDate,
      isVirtual,
      type,
    });
    setId(id);
    setState(true);
  }

  function renderCards() {
    return cards.map((i) => (
      <Content
        key={i.id}
        onClick={() =>
          handleChoiceCard(
            i.id,
            i.title,
            i.numero,
            i.cardholderName,
            i.password,
            i.securityCode,
            i.expirationDate,
            i.isVirtual,
            i.type
          )
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
        .delete(`/card/${id}`, CONFIG)
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
      <Header text={"Cartões"} />
      {state === false ? (
        <Content>
          {cards.length > 0 ? (
            renderCards()
          ) : (
            <span>Você não possui cartões salvos!</span>
          )}
          <BackHome onClick={() => setSelected(null)}>{"<"} Voltar</BackHome>
        </Content>
      ) : (
        <>
          <Data>
            <h1>{card.title}</h1>
            Numero do Cartão:
            <p>{card.numero}</p>
            Nome no Cartão:
            <p>{card.cardholderName}</p>
            Senha
            <p>{card.password}</p>
            Codigo de Seguranca (CVC):
            <p>{card.securityCode}</p>
            Data de Validade:
            <p>{card.expirationDate}</p>
            Cartao Virtual?
            <p>{card.isVirtual === true ? "Sim" : "Não"}</p>
            Tipo do Cartao:
            <p>
              {card.type === "credit"
                ? "Crédito"
                : card.type === "debit"
                ? "Débito"
                : "Crédito e Débito"}
            </p>
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
