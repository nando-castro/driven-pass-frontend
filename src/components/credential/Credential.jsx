import ItemHome from "../../shared/itemHome/ItemHome";
import { Container, Icon } from "./styles";
import { IoIosExit } from "react-icons/io";

export default function Credential() {
  return (
    <Container>
      <Icon>
        <IoIosExit className="icon" />
      </Icon>
      <ItemHome text={"Credenciais"} number={"3"} />
    </Container>
  );
}
