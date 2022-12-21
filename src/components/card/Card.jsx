import ItemHome from "../../shared/itemHome/ItemHome";
import { Container, Icon } from "./styles";
import { IoIosCard } from "react-icons/io";
import { useState } from "react";
import { useAuth } from "../../context/auth";
import { api } from "../../services/api";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export default function Card() {
  const [cards, setCards] = useState([]);
  const { setSelected, logout } = useAuth();
  const navigate = useNavigate();

  const { token } = JSON.parse(localStorage.getItem("userLogged"));

  function getNetworks() {
    const CONFIG = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    api
      .get("/cards", CONFIG)
      .then((res) => {
        setCards(res.data);
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
      });
  }

  useEffect(() => {
    getNetworks();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Container onClick={() => setSelected("cards")}>
      <Icon>
        <IoIosCard className="icon" />
      </Icon>
      <ItemHome text={"Cartões"} number={cards.length} />
    </Container>
  );
}
