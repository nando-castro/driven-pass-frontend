import ItemHome from "../../shared/itemHome/ItemHome";
import { Container, Icon } from "./styles";
import { BiWifi } from "react-icons/bi";
import { api } from "../../services/api";
import { useEffect, useState } from "react";
import { useAuth } from "../../context/auth";

export default function Network() {
  const [networks, setNetworks] = useState([]);
  const { setSelected } = useAuth();

  const { token } = JSON.parse(localStorage.getItem("userLogged"));

  function getNetworks() {
    const CONFIG = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    api
      .get("/networks", CONFIG)
      .then((res) => {
        setNetworks(res.data);
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
    <Container onClick={() => setSelected("networks")}>
      <Icon>
        <BiWifi className="icon" />
      </Icon>
      <ItemHome text={"Wifi"} number={networks.length} />
    </Container>
  );
}
