import ItemHome from "../../shared/itemHome/ItemHome";
import { Container, Icon } from "./styles";
import { HiPencil } from "react-icons/hi";
import { useState } from "react";
import { useAuth } from "../../context/auth";
import { api } from "../../services/api";
import { useEffect } from "react";

export default function Note() {
  const [notes, setNotes] = useState([]);
  const { setSelected } = useAuth();

  const { token } = JSON.parse(localStorage.getItem("userLogged"));

  function getNetworks() {
    const CONFIG = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    api
      .get("/notes", CONFIG)
      .then((res) => {
        setNotes(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    getNetworks();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container onClick={() => setSelected("notes")}>
      <Icon>
        <HiPencil className="icon" />
      </Icon>
      <ItemHome text={"Notas Seguras"} number={notes.length} />
    </Container>
  );
}
