import { BarBottom, Container, Top } from "./styles";
import { IoExit } from "react-icons/io5";
import Logo from "../logo/Logo";
import { useNavigate } from "react-router-dom";

export default function Header({ text }) {
  const navigate = useNavigate();
  function exitApp() {
    navigate("/");
    localStorage.clear();
    window.location.reload();
  }
  return (
    <Container>
      <Top>
        <Logo />
        <IoExit className="icon" onClick={exitApp} />
      </Top>
      <BarBottom>{text}</BarBottom>
    </Container>
  );
}
