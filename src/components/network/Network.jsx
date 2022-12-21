import ItemHome from "../../shared/itemHome/ItemHome";
import { Container, Icon } from "./styles";
import { BiWifi } from "react-icons/bi";
import { api } from "../../services/api";
import { useEffect, useState } from "react";
import { useAuth } from "../../context/auth";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export default function Network() {
  const [networks, setNetworks] = useState([]);
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
      .get("/networks", CONFIG)
      .then((res) => {
        setNetworks(res.data);
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
    <Container onClick={() => setSelected("networks")}>
      <Icon>
        <BiWifi className="icon" />
      </Icon>
      <ItemHome text={"Wifi"} number={networks.length} />
    </Container>
  );
}
