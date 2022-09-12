import { useNavigate } from "react-router-dom";
import Header from "../../shared/header/Header";
import { Container } from "./styles";

export default function HomeScreen() {
  const navigate = useNavigate();
  function exitApp() {
    navigate("/");
    localStorage.clear();
    window.location.reload();
  }
  return (
    <Container>
      <Header />
      <button onClick={exitApp}>Deslogar</button>
    </Container>
  );
}
