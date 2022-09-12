import { useNavigate } from "react-router-dom";
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
      <button onClick={exitApp}>Deslogar</button>
    </Container>
  );
}
