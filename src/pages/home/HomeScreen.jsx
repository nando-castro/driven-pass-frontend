import { useNavigate } from "react-router-dom";
import Header from "../../shared/header/Header";
import { ButtonAdd, Container } from "./styles";
import Credential from "../../components/credential/Credential";
import Note from "../../components/note/Note";
import Card from "../../components/card/Card";
import Network from "../../components/network/Network";

export default function HomeScreen() {
  const navigate = useNavigate();
  return (
    <Container>
      <Header />
      <Credential />
      <Note />
      <Card />
      <Network />
      <ButtonAdd>+</ButtonAdd>
    </Container>
  );
}
